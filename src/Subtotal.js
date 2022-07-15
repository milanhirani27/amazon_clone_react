import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducers";
import {useNavigate} from "react-router-dom";

const Subtotal = () => {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                                Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input className="checkbox"/>
                            This order as a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}
export default Subtotal
