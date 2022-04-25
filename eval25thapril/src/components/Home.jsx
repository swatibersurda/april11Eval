import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
export const Home = () => {

  const [usertotal,settotalUserList]=useState([]);
  const {totalterminated,totalpermoted,totalNew}=useContext(AuthContext);
  
 useEffect(()=>{

     axios.get("http://localhost:8080/employee").then((res)=>{
       console.log(res.data,"home");
       settotalUserList(res.data.length)
     })


 },[]);

//  const {totalterminated,totalpermoted,totalNew}=useContext(AuthContext)


  //  console.log(usertotal)


  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">:{usertotal}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{totalterminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{totalpermoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{totalNew}</span>
        </div>
      </div>
    </>
  );
};
