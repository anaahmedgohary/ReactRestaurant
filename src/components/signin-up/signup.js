import React from 'react';
import "./style/signin.css";
import { useState } from "react";
//import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

export default function SignUp()
{
  
  const [inputs, setInputs] = useState();
  const [iemail, setIemail] = useState("");
  const [ipassword, setIpassword] = useState("");

  const handleChange = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    
    console.log(inputs);
    
    //console.log(inputs.password);
    //console.log(inputs);
    setIemail(document.getElementById("email").value);
    setIpassword(document.getElementById("password").value);
    
  }

  
  
  console.log(iemail);
  console.log(ipassword);
  

  //const supabaseUrl = 'https://rfjecvakijoqooiktpon.supabase.co';
  //const supabaseKey = process.env.SUPABASE_KEY;
  //const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmamVjdmFraWpvcW9vaWt0cG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4NTM2MDIsImV4cCI6MTk4MDQyOTYwMn0.Ryea4rE_iOPb49WzUhvHZiOaKMkL_48kNPMVejaeP_M';
  //const supabase = createClient(supabaseUrl, supabaseKey);
  //console.log(supabase);

  const handleSubmit = async (event) =>
  {
    
    event.preventDefault();
    setIemail(iemail);
    setIpassword(ipassword);

    //axios.defaults.baseURL = process.env.APP_URL
    // process.env.NOW_URL
    const supabaseUrl = 'https://rfjecvakijoqooiktpon.supabase.co';
    //const supabaseKey = process.env.SUPABASE_KEY;
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmamVjdmFraWpvcW9vaWt0cG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4NTM2MDIsImV4cCI6MTk4MDQyOTYwMn0.Ryea4rE_iOPb49WzUhvHZiOaKMkL_48kNPMVejaeP_M';
    const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY);
    //const { inputs: newuser, error } = await supabase.from('newuser').select('*')
    const { data, error } = await supabase
      .from('newuser')
      .insert([
        { email: `${iemail}`, password: `${ipassword}` }
        
      ]);
    console.log(error);
    console.log(data);

    //let baseURL = "https://rfjecvakijoqooiktpon.supabase.co/api/";
    // https://app.supabase.com/project/rfjecvakijoqooiktpon/storage/buckets/api

    // https://react-restaurant-h47a0xx0f-ahmedgohary.vercel.app      //process.env.API_URL;  //process.env.NOW_URL
    // http://localhost:80/api/

    //axios.post(supabase, inputs
      // {
        // headers: {
        //   //'Content-Type': 'https://react-restaurant-php.vercel.app',
        //   'Content-type': 'application/x-www-form-urlencoded',
        //   'Access-Control-Allow-Origin': "*",
        //   //'Access-Control-Allow-Headers': '*',
        //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        // }
    //);
    
    


    
  }
    



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

