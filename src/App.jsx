import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import { WebMaster } from './AllCourses/WebMaster';
function App() {
  return (
    <BrowserRouter> 
     <main className="flex flex-col pb-16 overflow-hidden bg-black">
          <Navbar/>
          
          <WebMaster />
          
          
          
          
          
          <Footer />
     </main>
    </BrowserRouter>
    
  );
}

export default App;
