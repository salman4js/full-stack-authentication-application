import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


const Signin = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword,setConfirmpassword ] = useState();


  const checkItems =  (credentials) => {
    axios.post("http://localhost:3002/signin", credentials)
    .then(res => console.log(res.data));
    alert("User Added to the database successfully!");
    window.location = "/";
  }

  const getData = async (e) => {
    e.preventDefault();
    const credentials = {
      username : email,
      password : password
    }
    console.log(email);
    console.log(password);
    console.log(confirmpassword);
    if(password === confirmpassword){
     checkItems(credentials);
    } else {
      alert("Passwords Dont Match!");
    }
  }

  return (
    <div className = "container">
        <h1 className="header">
                Zero One!
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
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name = "password" value = {password} onChange = {((e) => setPassword(e.target.value))}  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name = "confirmpassword" value = {confirmpassword} onChange = {((e) => setConfirmpassword(e.target.value))} />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
                <br />
                <br />
                <Link to = "/"> Already Have an account, Login! </Link>
            </form>
    </div>
  )
}

export default Signin