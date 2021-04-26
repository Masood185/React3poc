import React,{useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import 'jquery/dist/jquery.min.js';
import $ from 'jquery'; 

const Login=()=>{
let history=useHistory();
const[user,SetUser]=useState({

    username:"",
    pass:"",

})

const{username,pass}=user;

const onInputChange=e=>{
SetUser({[e.target.name]:e.target.value});

}

useEffect(()=>{
loadUser();

})
const loadUser=()=>{
$("nav").hide();

}

const onSubmit=e=>{
    
    
if(pass=="Admin"){
    history.push("/Home");
}else{
    alert("User Id or Password is Invalid!")
}

}

return(
<div className="container space" >
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your User Name"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Password"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              
              name="pass"
              value={pass}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
)

}
export default Login;
