import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/LoginPage";
import SignUpPage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPassword";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
    </Routes>
  )
}

export default App;
