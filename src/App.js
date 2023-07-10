import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/LoginPage";
import SignUpPage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPassword";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {

  return (
      <Layout/>
  )
}

export default App;
