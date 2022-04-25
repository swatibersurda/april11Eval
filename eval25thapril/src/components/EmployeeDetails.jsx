import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

export const EmployeeDetails = () => {
  const {id}=useParams();
  const [emp,setemp]=useState({});

  useEffect(()=>{

    axios.get("http://localhost:8080/employee",{params:{id:`${id}`}}).then((res)=>{
      console.log(res.data,"emp");
      // settotalUserList(res.data.length)
      setemp(res.data)

    })


},[]);
console.log(emp,"lll")

 

  return (
    <div className="user_details">
      <img className="user_image" src={emp.image} />
      <h4 className="user_name">{emp.employee_name}</h4>
      <span className="user_salary">${emp.salary}</span>
      <span className="tasks">
        <li className="task">{emp.tasks}</li>
      </span>
      Status: <b className="status">{emp.status}</b>
      Title: <b className="title">{emp.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
