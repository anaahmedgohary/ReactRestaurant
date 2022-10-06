import React from 'react';
import "./style/signin.css";
import { useState } from "react";
import axios from 'axios';

export default function SignUp()
{
  const [inputs, setInputs] = useState({})

  const handleChange = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    //axios.defaults.baseURL = process.env.APP_URL
    // process.env.NOW_URL
    let baseURL = "https://react-restaurant-h47a0xx0f-ahmedgohary.vercel.app/";
    // https://react-restaurant-h47a0xx0f-ahmedgohary.vercel.app      //process.env.API_URL;  //process.env.NOW_URL
    // http://localhost:80/api/

    axios.post(baseURL, inputs,
      {
        headers: {
          //'Content-Type': 'https://react-restaurant-php.vercel.app',
          'Content-type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': "*",
          //'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      });
    console.log(inputs);

    // fetch("mAgfFs4y1Dt1ERMjSZCNhprH", {
    //   // Enter your IP address here
    // axios.defaults.baseURL = process.env.APP_URL
    //   method: "POST",
    //   // url: "./api/index.php",
    //   mode: "cors",
    //   body: JSON.stringify(inputs),
    // });
  };



  return (
    <div className="container">
      <div id="signupDiv">
        <h6>Sign Up</h6>
        <div>
          <form
            // action="./signup.php"
            // method="post"
            id="signinForm"
            onSubmit={handleSubmit}
          >
            <label className="label-signin" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label className="label-signin" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
            <div>
              <input
                className="submit-btn btn btn-success"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
        <div>
          <a
            className="forgot-pass"
            href="./forgotpass"
            target="_blank"
            rel="noopener noreferrer"
          >
            forgot password ?
          </a>
        </div>
      </div>
    </div>
  );
}
