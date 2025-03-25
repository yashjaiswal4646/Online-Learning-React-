// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}



   <BrowserRouter>
     <AdminLogin/>
   </BrowserRouter>
   
  </>
)
}

export default App;
