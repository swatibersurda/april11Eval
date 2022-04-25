import { useState } from "react";
import axios from "axios";

export const Admin = () => {
   const [empcre,setEmpcreate]=useState({
    "employee_name":"",
    "employee_id":"",
    "title":"",
    "salary":"",
    "image":"",
    "username":"",
    "password":'',
    "tasks":"",
    "status":"",
    "team":""

     


   })
          const handleValue=(e)=>{
            console.log(e.target.value)
            console.log(e.target.name);
            // const {name,value}=e.target;

          // setEmpcreate({...emprc,[name]:value})
          // setEmpcreate({...empcre,empcre:[name]:value})

          // if(e.target.name==="employee_name")
          // {
          //    setEmpcreate({...empcre,employee_name:e.target.value})
          // }


          setEmpcreate({...empcre,[e.target.name]:e.target.value})
        


          }

     console.log(empcre);

     const handleStore=(empcre)=>{
       console.log("hello");
         
          axios.post("http://localhost:8080/employee",empcre).then((res)=>{
           console.log(res.data)

          });

     }


  return (
    <form className="createEmployee" onSubmit={()=>{handleStore(empcre)}}>
      <input type="text" placeholder="Employee Name" name="employee_name"  onChange={handleValue}/>
      <input type="text" placeholder="Employee id" name="employee_id" onChange={handleValue} />
      <select name="title" onChange={handleValue}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handleValue}/>
      <input type="text" placeholder="Image" name="image" onChange={handleValue} />
      <input type="text" placeholder="User Name" name="username" onChange={handleValue} />
      <input type="password" placeholder="Password" name="password" onChange={handleValue} />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks" onChange={handleValue}
      />
      <select name="status" id="status" onChange={handleValue}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleValue}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"}  />
    </form>
  );
};
