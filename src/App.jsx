// import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";




function App() {
  return (
    <>
   {/* <AppRoutes /> */}



   <BrowserRouter>
     <PrivacyPolicy/>
   </BrowserRouter>
   
   
  </>
)
}

export default App;
