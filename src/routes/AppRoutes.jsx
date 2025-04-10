import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

import {About, About2, Home, Home2, Courses, Course2, Login, PrivacyPolicy, Signup, Profile} from "../pages/Index";
import {AdminCourse, AdminDashboard, AdminInstructor, AdminLogin, AdminStudent} from '../components/Admin/Index'
import {Flutter, WebDev, WebDevlopment, Hacking, Nodejs, WebMaster} from '../components/AllCourses/Index'
import {FlutterPayment, WebDevPayment, WebDevlopmentPayment, HackingPayment, NodejsPayment, WebMasterPayment} from '../components/Payment/Index'
import {FlutterSyllabus, HackingSyllabus, WebDevSyllabus, WebDevelopmentSyllabus, WebMasterSyllabus} from '../components/Syllabus/Index'
import {PayFlutter, PayHacking, PayNodejs, PayWebDev, PayWebDevlopment, PayWebMaster} from '../components/PayScanner/index'


function AppContent() {
  const location = useLocation();

  // Define routes where LoginNavbar should be shown
  const showLoginNavbar = location.pathname === "/login";
  const showSignupNavbar = location.pathname === "/signup";

  const hideNavbarRoutes = [ "/admin/login", "/admin/dashboard", "/admin/courses", "/admin/students", "/admin/instructor"]
  const showNavbar =!hideNavbarRoutes.includes(location.pathname);

  const hideFooterRoutes = ["/login", "/signup", "/admin/login",  "/admin/dashboard", "/admin/courses", "/admin/students", "/admin/instructors"];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  
  return (
    <>   
      {!showLoginNavbar && !showSignupNavbar && showNavbar && <Navbar />} 
      {showLoginNavbar && <Login />} 
      {showSignupNavbar && <Signup />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home2" element={<Home2/>} />
        <Route path="/course2" element={<Course2/>} />
        <Route path="/about2" element={<About2/>} />

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

        {/* All payment page */}
        <Route path="/FlutterPayment" element={<FlutterPayment/>}/>
        <Route path="/WebDevPayment" element={<WebDevPayment/>}/>
        <Route path="/WebDevelopmentPayment" element={<WebDevlopmentPayment/>}/>
        <Route path="/HackingPayment" element={<HackingPayment/>}/>
        <Route path="/NodejsPayment" element={<NodejsPayment/>}/>
        <Route path="/WebMasterPayment" element={<WebMasterPayment/>}/>

        {/* All PayScanner page */}
        <Route path="/PayFlutter" element={<PayFlutter/>} />
        <Route path="/PayWebDev" element={<PayWebDev/>} />
        <Route path="/PayWebDevelopment" element={<PayWebDevlopment/>} />
        <Route path="/PayHacking" element={<PayHacking/>} />
        <Route path="/PayNodejs" element={<PayNodejs/>} />
        <Route path="/PayWebMaster" element={<PayWebMaster/>} />



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
