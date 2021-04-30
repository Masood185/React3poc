import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 

const Home=()=>{
const [users,setUser]=useState([]);

useEffect(() => {
    loadUser();
},[])

const loadUser = async () => {

  $("nav").show();
 
    const result = await axios.get("https://pocwebapi.azure-api.net/getuserlist");
    setUser(result.data.reverse());
    $('#myTable').DataTable();
  };

  const deleteUser = async id => {
    await axios.delete(`https://pocwebapi.azure-api.net/getuserlist/${id}`);
    loadUser();
  };

    return(
        <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow" id="myTable">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/user/userview/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default Home;
