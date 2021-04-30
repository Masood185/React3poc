import React,{useState,useEffect} from "react"
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery'; 



const Edit=()=>{

    let history=useHistory();
    const[user,SetUser]=useState({
name:"",
username:"",
phone:"",
email:"",
website:""

    })



    const {id}=useParams();

    const{name,phone,email,username,website}=user;

    const onInputChange=e=>{

        SetUser({...user,[e.target.name]:e.target.value});

    }

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser= async ()=>{
 const result=await axios.get(`http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/${id}`,user);
SetUser(result.data);

    }

    const onSubmit= async e=>{
 e.preventDefault();

 await axios.put(`http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/${id}`,user);
 history.push("/Home");

    }

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
    const regex = /[A-Za-z]/;
    function validate(e) {
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
        $("#errmsgname").css("display", "block");
      }else{
        $("#errmsgname").css("display", "none");

      }
    }
    document.querySelector('#name').addEventListener('input', validate);

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

return(

      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              id="name"
              onChange={e => onInputChange(e)}
              onKeyPress={e=>txtvalidate2(e)}

            />
            <label className="errmsg" style={{display:"none"}} id="errmsgname" >Numaric and Special Correctors are not allowed!</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              id="uname"
              onChange={e => onInputChange(e)}
              onKeyPress={e=>txtvalidate3(e)}

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
            {/* <label className="errmsg" id="errmsgname" >Numaric and Special Correctors are not allowed!</label> */}

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
              onKeyPress={e=>txtvalidate(e)}
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
            {/* <label className="errmsg" id="errmsgname" >Numaric and Special Correctors are not allowed!</label> */}

          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
)

}
export default Edit;