import React, {useEffect} from "react";
import './App.css';
import Home from "./Home";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Orders from "./Orders";

//add stripe public key
const promise = loadStripe('')

function App() {
    const[{}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if(authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    },[]);

  return (
      <BrowserRouter>
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/payment" element={<Elements stripe={promise} ><Payment /></Elements>}/>
                <Route path="/orders" element={<Orders />}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
