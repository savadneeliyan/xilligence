import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { TextFieldWithLabel } from "../InputFields/TextFields";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [errorData, setErrorData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorData((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let error = {};
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!loginData.email) {
      error.email = "Please enter a email";
    } else if (!emailRegex.test(loginData.email)) {
      error.email = "please enter a valid email";
    }

    if (!loginData.password) {
      error.password = "Please enter a password";
    }

    setErrorData(error);
    return Object.keys(error).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      let details = {
        username: formData?.email,
        tocken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      };

      localStorage.setItem("userDetails", JSON.stringify(details));
      console.log(loginData);
      navigate("/");
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          height: "inline-block",
          margin: "auto",
        }}
      >
        <TextFieldWithLabel
          label="Email Address"
          value={loginData?.email}
          name={"email"}
          error={Boolean(errorData?.email)}
          helperText={errorData?.email}
          handleChange={handleChange}
        />
        <TextFieldWithLabel
          label="Password"
          value={loginData?.password}
          name={"password"}
          type="password"
          error={Boolean(errorData?.password)}
          helperText={errorData?.password}
          handleChange={handleChange}
        />

        <Button
          sx={{
            background: "#0057ff ",
            border: "0.063rem solid #0057ff !important ",
            color: "#fff",
            transition: "0.5s ease",
            px: "2rem",
            "&:hover": {
              background: "#fff ",
              color: "#0057ff",
            },
          }}
          onClick={handleLogin}
        >
          login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
