import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Route,Routes} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>{/* Routes here */}
      <Route path="/" element={<Home/>}></Route>
      <Route path="/employees" element={<EmployeeList/>}></Route>
      <Route path="/employees/:id" element={
        <EmployeeDetails/>

      // <EmployeeDetails/>

      }></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/admin" element={<Login/>}></Route>
      
      
      
      
      </Routes>
    </div>
  );
}

export default App;
