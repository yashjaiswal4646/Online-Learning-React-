// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";




function App() {
  return (
    <>
   {/* <AppRoutes />; */}



   <BrowserRouter>
     <Profile/>
   </BrowserRouter>
   
  </>
)
}

export default App;
