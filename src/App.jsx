import React from 'react';
import { BrowserRouter } from "react-router-dom";

// import Navbar from './Navbar';
// import Footer from './Footer';

import LoginForm from './Login/LoginForm';
import Navbar from './Login/Navbar';


function App() {
  return (
    <BrowserRouter> 
     <main className="flex flex-col pb-16 overflow-hidden bg-black">
          
          {/* <Navbar/> */}
          
          
          {/* <Footer /> */}


      <Navbar />
      <section className="flex relative justify-center items-center min-h-[calc(100vh_-_95px)]">
        <div className="absolute bg-fuchsia-700 blur-[100px] h-[304px] w-[178px] z-[1]" />
        <LoginForm />
      </section>

          
     </main>
    </BrowserRouter>
    
  );
}

export default App;
