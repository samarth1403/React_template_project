import { height } from "@mui/system";
import React, { useState } from "react";
import PrimaryButton from "../../../components";
import axiosInstance from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { URLS } from "../../../utils/constants/urls";
import { setAuthentication } from "../../../utils/redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const body = { email: email, password: password };
    try {
      const { status, data } = await axiosInstance.post(
        "http://localhost:3001/api/user/login-user",
        body
      );
      console.log(status)
      if (data?.userData?.Token) {
        dispatch(setAuthentication(data?.userData?.Token));
        Navigate("/", { replace: true });
      } else {
        console.log("WRONG PASSWORD || EMAIL");
      }
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.error_description);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div>Login</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 500 }}>
          <div>Enter you email : </div>
          <input
            onChange={(event: any) => setEmail(event.target.value)}
          ></input>
          <div>Enter you password : </div>
          <input
            type={"password"}
            onChange={(event: any) => setPassword(event.target.value)}
          ></input>
          <PrimaryButton onClick={onSubmit}>CLICK ME</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
