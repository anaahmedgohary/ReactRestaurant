import React from 'react';
import "./style/signin.css";
import { useState } from "react";
import $ from "jquery";
//import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

export default function SignUp()
{
  
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState();
  const [iemail, setIemail] = useState("");
  const [ipassword, setIpassword] = useState("");

  const handleChange = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    
    // console.log(inputs);
    
    setIemail(document.getElementById("email").value);
    setIpassword(document.getElementById("password").value);
    
  }
  
  const handleSubmit = async (event) =>
  {
    
    event.preventDefault();
    //axios.defaults.baseURL = process.env.APP_URL
    // process.env.NOW_URL
    class urls
    {
      #value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmamVjdmFraWpvcW9vaWt0cG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4NTM2MDIsImV4cCI6MTk4MDQyOTYwMn0.Ryea4rE_iOPb49WzUhvHZiOaKMkL_48kNPMVejaeP_M';
      SPAK = this.#value
    }
    const supabaseUrl = 'https://rfjecvakijoqooiktpon.supabase.co';
    //const supabaseKey = process.env.SUPABASE_KEY;
    const privates = new urls();
    const SUPABASE_ANON_KEY = privates.SPAK
    const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY);
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase
      .from('newuser')
      .insert([
        { email: `${iemail}`, password: `${ipassword}` }
        
    ]);
    
    $("#submitSignUp").off("click");
    $("#submitSignUp").prop('disabled', true);
    $("#submitSignUp").hide();
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Thank You!")
    console.log(error);
    // console.log(data);
    
  }
    

    return (
      <div className="signupcontainer">
        <div id="signupDiv">

         <div>
           <h6>Sign Up</h6>
          </div>
          
          <div>
            <form
              id="signinForm"
              onSubmit={handleSubmit}
            >

              <div>
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
              </div>

              <div>
                <label className="label-signin" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  className="submit-btn btn btn-success"
                  type="submit"
                  value="Sign Up"
                  id='submitSignUp'
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
              title='recover password'
            >
              forgot password !
            </a>
          </div>

        </div>
      </div>
    );
  }

