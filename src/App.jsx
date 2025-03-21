//import AppRoutes from "./routes/AppRoutes";
import WebMasterCourse from "./components/Syllabus/WebMasterCourse";

import { BrowserRouter } from "react-router-dom";
// import Signup from "./pages/Signup";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}



   <BrowserRouter>
     <WebMasterCourse/>
   </BrowserRouter>
   
  </>
)
}

export default App;
