import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { Upbutton } from "./components/Upbutton";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Services } from "./pages/Services";
import { AuthProvider } from "./context/AuthContext";
// import { OurProjects } from "./pages/OurProjects";
import { Construction } from "./components/Construction";
import { Reparation } from "./components/Reparation";
import { Professionals } from "./pages/Professionals";
import { UserProvider } from "./context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            <ToastContainer />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route
                path="terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="services" element={<Services />} />
              {/* <Route path="our-projects" element={<OurProjects />} /> */}
              <Route path="professionals" element={<Professionals />} />
              <Route path="construction" element={<Construction />} />
              <Route path="reparation" element={<Reparation />} />
            </Routes>
            <Upbutton />
            <Footer />
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
