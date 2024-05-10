import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
<<<<<<< HEAD
import Footer from "../Components/Footer";
import GenerateYourMovie from "../pages/GenerateYourMovie";
import AboutUs from "../pages/AboutUs";
=======
import Footer from "../components/Footer";
>>>>>>> 98b547eeb2678ab083f41a4a2271d9134446acd9

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generate" element={<GenerateYourMovie />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
