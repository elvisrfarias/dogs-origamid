import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCrete from "./LoginCrete";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/create" element={<LoginCrete />}></Route>
        <Route path="/lost" element={<LoginPasswordLost />} />
        <Route path="/reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
