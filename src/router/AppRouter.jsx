import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import AboutUs from "../pages/AboutUs";
import Footer from "../layout/Footer";
import ActorSearch from "../pages/ActorSearch";



const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<ActorSearch />} />
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
