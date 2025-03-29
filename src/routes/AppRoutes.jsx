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
import FlutterSyllabus from "../components/Syllabus/FlutterSyllabus";
import HackingSyllabus from "../components/Syllabus/HackingSyllabus";
import WebDevSyllabus from "../components/Syllabus/WebDevSyllabus";
import WebMasterSyllabus from "../components/Syllabus/WebMasterSyllabus";
import WebDevelopmentSyllabus from "../components/Syllabus/WebDevelopmentSyllabus"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminCourse from "../components/Admin/AdminCourse";
import AdminStudent from "../components/Admin/AdminStudent";
import AdminInstructor from "../components/Admin/AdminInstructor";
import AdminSettings from "../components/Admin/AdminSetting";



function AppRoutes() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

        {/* All Courses */}
        <Route path="/courses/web-development" element={<WebDevlopment />} />
        <Route path="/courses/hacking" element={<Hacking />} />
        <Route path="/courses/flutter" element={<Flutter />} />
        <Route path="/courses/nodejs" element={<Nodejs />} />
        <Route path="/courses/web-dev-cohort" element={<WebDev />} />
        <Route path="/courses/web-development-master" element={<WebMaster />} />

        {/* All Syllabus */}
        <Route path="/FlutterSyllabus" element={<FlutterSyllabus/>} />
        <Route path="/WebDevSyllabus" element={<WebDevSyllabus/>} />
        <Route path="/WebDevelopmentSyllabus" element={<WebDevelopmentSyllabus/>} />
        <Route path="/WebMasterSyllabus" element={<WebMasterSyllabus/>} />
        <Route path="/HackingSyllabus" element={<HackingSyllabus/>} />

        {/* All Admin Pages */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/courses" element={<AdminCourse/>} />
        <Route path="/students" element={<AdminStudent/>} />
        <Route path="/instructors" element={<AdminInstructor/>} />
        <Route path="/settings" element={<AdminSettings/>} />





        
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
