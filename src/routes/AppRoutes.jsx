import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WebDevlopment from "../components/AllCourses/WebDevlopment";
import Hacking from "../components/AllCourses/Hacking";
import Flutter from "../components/AllCourses/Flutter";
import Nodejs from "../components/AllCourses/Nodejs";
import WebDev from "../components/AllCourses/WebDev";
import WebMaster from "../components/AllCourses/WebMaster";



function AppRoutes() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be shown on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/courses/web-development" element={<WebDevlopment />} />
        <Route path="/courses/hacking" element={<Hacking />} />
        <Route path="/courses/flutter" element={<Flutter />} />
        <Route path="/courses/nodejs" element={<Nodejs />} />
        <Route path="/courses/web-dev-cohort" element={<WebDev />} />
        <Route path="/courses/web-development-master" element={<WebMaster />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
