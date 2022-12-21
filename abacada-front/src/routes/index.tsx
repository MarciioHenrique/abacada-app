import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";


function RoutesApp() {
  const Private = ({Item}: any) => {
    const signed = false;
    return signed ? <Item /> : <Signin />;
  };


  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;