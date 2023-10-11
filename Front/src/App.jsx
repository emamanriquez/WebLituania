import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
 

  return (
    <>
      <div>
    
        
      </div>
     <Routes>
     <Route path="/" element={<Home />} />
            {/* <Route path="/media" element={<FormLogin />} />
            <Route path="/contact" element={<LoginClient />} />
            <Route path="/about" element={<SignIn />} /> */}
     </Routes>
      
    </>
  )
}

export default App
