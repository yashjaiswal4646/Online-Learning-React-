// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
// import WebDevelopmentSyllabus from "./components/Syllabus/WebDevelopmentSyllabus";
// import WebMasterSyllabus from "./components/Syllabus/WebMasterSyllabus";
// import WebDevSyllabus from "./components/Syllabus/WebDevSyllabus";
import HackingSyllabus from "./components/Syllabus/HackingSyllabus";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}



   <BrowserRouter>
     <HackingSyllabus/>
   </BrowserRouter>
   
  </>
)
}

export default App;
