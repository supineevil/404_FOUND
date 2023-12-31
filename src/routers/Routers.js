import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PetListing from "../pages/PetListing";
import PetDetails from "../pages/PetDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/LoginPage";
import SignUpPage from "../pages/RegisterPage";
import ForgetPasswordPage from "../pages/ForgetPassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<PetListing />} />
      <Route path="/pets/:slug" element={<PetDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
