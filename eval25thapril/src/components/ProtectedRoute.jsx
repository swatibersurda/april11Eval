import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const ProtectedRoute=({children})=>{
         const {login} =useContext(AuthContext)


   if(!login)
   {
       Navigate ("/Login");
   }

   return children;



}