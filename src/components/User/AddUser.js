import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery'; 

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products", user);
    history.push("/Home");
  };


  const txtvalidate=e=>{
    const regex = /^[0-9]/;
    function validate(e) {
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
        $("#errmsgnum").css("display", "block");
      }else{
        $("#errmsgnum").css("display", "none");

      }
    }
    document.querySelector('#intp').addEventListener('input', validate);

}

const txtvalidate2=e=>{
  debugger
  const regex = /[A-Za-z]/;
  function validate(e) {
    const chars = e.target.value.split('');
    const char = chars.pop();
    if (!regex.test(char)) {
      $("#errmsgname1").css("display", "block");
    }else{
      $("#errmsgname1").css("display", "none");

    }
  }
  document.querySelector('#name1').addEventListener('input', validate);

}

const txtvalidate3=e=>{
const regex = /[A-Za-z]/;
function validate(e) {
  const chars = e.target.value.split('');
  const char = chars.pop();
  if (!regex.test(char)) {
    $("#errmsguname").css("display", "block");
  }else{
    $("#errmsguname").css("display", "none");

  }
}
document.querySelector('#uname').addEventListener('input', validate);

}



  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              id="name1"
              value={name}
              onChange={e => onInputChange(e)}
              onClick={e=>txtvalidate2(e)}
            />
            <label className="errmsg" style={{display:"none",color:"red"}} id="errmsgname1" >Numaric and Special Correctors are not allowed!</label>

          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              id="uname"
              value={username}
              onChange={e => onInputChange(e)}
              onClick={e=>txtvalidate3(e)}

            />
            <label className="errmsg" style={{display:"none"}} id="errmsguname" >Numaric and Special Correctors are not allowed!</label>

          </div>
          <div className="form-group">
            <input
              type="email"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              id="intp"
              value={phone}
              onChange={e => onInputChange(e)}
              onClick={e=>txtvalidate(e)}

            />
            <label className="errmsg" style={{display:"none"}} id="errmsgnum" >Alphabets and Special Correctors are not allowed!</label>

          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
