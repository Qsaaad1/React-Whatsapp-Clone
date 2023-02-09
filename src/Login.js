import React, { useState, useEffect } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispath] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispath ({
                type: actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <div className="login_container">

        <img src="https://i.postimg.cc/1zk7FrH6/pngwing-com-2.png" alt="" />

        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>

      </div>
    </div>
  );
}

export default Login;
