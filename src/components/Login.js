import React, {useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errortext, setErrortext] = useState();

    const checkCredentials = (credentials) => {
        axios.post("http://localhost:3002/login", credentials)
        .then(res => {if(res.data === "No user has been found"){
            alert("No user has been found");
        }else {
          window.location = "/firstpage"
        }});

    }

    const getData = (e) => {
        e.preventDefault()
        const credentials = {
          username : email,
          password : password
        }
        console.log(email);
        console.log(password);
        checkCredentials(credentials);
    }

    return (
        <div className="container">
            <h1 className="header">
                Call Of Coders!
            </h1>
            <hr />
            <form onSubmit = {getData}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name = "email" value = {email} onChange = {((e) => setEmail(e.target.value))} />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name = "password" value = {password} onChange = {((e) => setPassword(e.target.value))} />
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1"> Keep Me Signed In </label>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
                <br />
                <br />
                <Link to = "/signin"> Dont have an account? Sign In Here! </Link>
            </form>
        </div>
    )
}

export default Login
