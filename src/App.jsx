// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import AdminCourse from "./components/Admin/AdminCourse";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}
   <BrowserRouter>
     <AdminCourse/>
   </BrowserRouter>
   
  </>
)
}

export default App;
