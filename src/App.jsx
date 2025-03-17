// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/pages/Login/Navbar";
import LoginForm from "../src/pages/Login/LoginForm";



function App() {
  return (
    <>
   {/* <AppRoutes />; */}
   <BrowserRouter>
       <Navbar/>
      <LoginForm/> 
   
   </BrowserRouter>
  </>
)
}

export default App;
