import React, {useEffect, useState} from 'react';
import './Payment.css';
import {useStateValue} from "./StateProvider";
import {Link, useNavigate} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement,useElements, useStripe} from "@stripe/react-stripe-js";
import {getBasketTotal} from "./reducers";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

const Payment = () => {
    const navigate = useNavigate();
    const [{basket, user} , dispatch] = useStateValue();

    const stripe = useStripe();
    const element = useElements();

    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret().then();
    }, [basket]);


    const handleChange = async (event) => {
       setDisabled(event.empty);
       setError(event.error ? event.error.message : "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: element.getElement(CardElement)
            }
        }).then((res) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(res?.error?.payment_intent?.id)
                .set({
                    basket: basket,
                    amount: res?.error?.payment_intent?.amount,
                    created: res?.error?.payment_intent?.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })
            navigate('/orders')

        }).catch((error) => {
            console.log("error in payment", error);
        })

    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout(<Link  to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Katargam, Surat</p>
                        <p>Gujarat, India</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review item and Delivery</h3>
                    </div>
                    <div className="payment_item">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment
