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
import { Construction } from "./components/Construction";
import { Reparation } from "./components/Reparation";
import { Professionals } from "./pages/Professionals";
import { UserProvider } from "./context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AdminPanel } from "./pages/AdminPanel";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { ProtectedAdminRoute } from "./pages/ProtectedAdminRoute";
import { ClientActivity } from "./pages/ClientActivity";
import { WorkProvider } from "./context/WorkContext";
import { ProfessionalActivity } from "./pages/ProfessionalActivity";
import { Profile } from "./pages/Profile";
import { PublicProfile } from "./pages/PublicProfile";
import { RequestResetPassword } from "./pages/RequestResetPassword";
import { ResetPassword } from "./pages/ResetPassword";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <WorkProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col overflow-x-hidden">
              <ToastContainer />
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route
                  path="terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="services" element={<Services />} />
                <Route path="professionals" element={<Professionals />} />
                <Route path="construction" element={<Construction />} />
                <Route path="reparation" element={<Reparation />} />
                <Route path={`professional/:id`} element={<PublicProfile />} />
                <Route
                  path="request-reset-password"
                  element={<RequestResetPassword />}
                />
                <Route
                  path="reset-password/:resetPasswordToken"
                  element={<ResetPassword />}
                />
                <Route element={<ProtectedRoute />}>
                  <Route path="contact" element={<Contact />} />
                  <Route path="activity" element={<ClientActivity />} />
                  <Route
                    path="activity-professional"
                    element={<ProfessionalActivity />}
                  />
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route element={<ProtectedAdminRoute />}>
                  <Route path="admin" element={<AdminPanel />} />
                </Route>
              </Routes>
              <Upbutton />
              <Footer />
            </div>
          </BrowserRouter>
        </WorkProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
