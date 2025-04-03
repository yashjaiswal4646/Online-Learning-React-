import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Navbar from "../components/Navbar";  // Default Navbar
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
import WebDevelopmentSyllabus from "../components/Syllabus/WebDevelopmentSyllabus";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminCourse from "../components/Admin/AdminCourse";
import AdminStudent from "../components/Admin/AdminStudent";
import AdminInstructor from "../components/Admin/AdminInstructor";
import AdminLogin from "../components/Admin/AdminLogin";

function AppContent() {
  const location = useLocation();

  // Define routes where LoginNavbar should be shown
  const showLoginNavbar = location.pathname === "/login";
  const showSignupNavbar = location.pathname === "/signup";

  const hideNavbarRoutes = [ "/admin/login", "/admin/dashboard", "/admin/courses", "/admin/students", "/admin/instructors"]
  const showNavbar =!hideNavbarRoutes.includes(location.pathname);

  const hideFooterRoutes = ["/login", "/signup", "/admin/login",  "/admin/dashboard", "/admin/courses", "/admin/students", "/admin/instructors"];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  
  return (
    <>   
      {!showLoginNavbar && !showSignupNavbar && showNavbar && <Navbar />} 
      {showLoginNavbar && <Login />} 
      {showSignupNavbar && <Signup />}
      {/* {showNavbar && <Navbar />}   */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* All Courses */}
        <Route path="/courses/web-development" element={<WebDevlopment />} />
        <Route path="/courses/hacking" element={<Hacking />} />
        <Route path="/courses/flutter" element={<Flutter />} />
        <Route path="/courses/nodejs" element={<Nodejs />} />
        <Route path="/courses/web-dev-cohort" element={<WebDev />} />
        <Route path="/courses/web-development-master" element={<WebMaster />} />

        {/* All Syllabus */}
        <Route path="/FlutterSyllabus" element={<FlutterSyllabus />} />
        <Route path="/WebDevSyllabus" element={<WebDevSyllabus />} />
        <Route path="/WebDevelopmentSyllabus" element={<WebDevelopmentSyllabus />} />
        <Route path="/WebMasterSyllabus" element={<WebMasterSyllabus />} />
        <Route path="/HackingSyllabus" element={<HackingSyllabus />} />

        {/* All Admin Pages */}
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<AdminCourse />} />
        <Route path="/admin/students" element={<AdminStudent />} />
        <Route path="/admin/instructors" element={<AdminInstructor />} />
      </Routes>

     {/* Conditionally render Footer */}
     {showFooter && <Footer />}

    </>
  );
}

function AppRoutes() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default AppRoutes;
