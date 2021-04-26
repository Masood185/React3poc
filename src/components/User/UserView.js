import React,{useState,useEffect} from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom";

const UserView=()=>{

    const[user,SetUser]=useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""

    });
    const{name,username,email,phone,website}=user;
    const{id}=useParams();

    useEffect(()=>{
    loadUser();

    });

    const loadUser=async ()=>{
      const result=await axios.get(`https://my-json-server.typicode.com/Masood185/masoodfakeapi/users/${id}`,user);
      SetUser(result.data);
    }


    return(
        <div className="container py-4">
     
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
    )

}
export default UserView;