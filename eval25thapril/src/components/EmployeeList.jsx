import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
 const [user,setUserList]=useState([]);

 useEffect(()=>{

     axios.get("http://localhost:8080/employee").then((res)=>{
       console.log(res.data);
       setUserList(res.data)
     })


 },[])


    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}


        {user.map((ele)=>(
           <div className="employee_card">

            <Link to={`/employees/${ele.id}`}>

           <img className="employee_image" src={ele.image} />
           <span className="employee_name">{ele.employee_name}</span>
           <span className="employee_title">{ele.title}</span>
           </Link>
         </div>
         

        ))}
        {/* <div className="employee_card">
          <img className="employee_image" />
          <span className="employee_name"></span>
          <span className="employee_title"></span>
        </div> */}
      </div>
    );
  };