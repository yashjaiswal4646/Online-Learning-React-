// import AppRoutes from "./routes/AppRoutes";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FlutterCourse from "./components/Syllabus/FlutterCourse";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
  {/* // <AppRoutes />; */}
  <Navbar/>
  <FlutterCourse/>
  <Footer/>
  </BrowserRouter>
  </>
)
}

export default App;
