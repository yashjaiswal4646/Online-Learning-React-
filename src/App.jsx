//import AppRoutes from "./routes/AppRoutes";
//import WebMasterCourse from "./components/Syllabus/WebMasterCourse";

import { BrowserRouter } from "react-router-dom";
import WebDevlopmentCourse from "./components/Syllabus/WebDevelopmentCourse";
//import WebDeCourse from "./components/Syllabus/WebDevCourse";
//import EthicalCourse from "./components/Syllabus/EthicalCourse";
//import FlutterSyllabus from "./components/Syllabus/FlutterSyllabus";
// import Signup from "./pages/Signup";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}



   <BrowserRouter>
     <WebDevlopmentCourse/>
   </BrowserRouter>
   
  </>
)
}

export default App;
