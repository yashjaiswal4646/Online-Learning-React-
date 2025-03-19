// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";



function App() {
  return (
    <>
   {/* <AppRoutes />; */}
   <BrowserRouter>
     <Signup/>
   </BrowserRouter>
   
  </>
)
}

export default App;
