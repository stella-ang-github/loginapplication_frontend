import React, { useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import login from "./api/userAPI";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  // const [invalidInput, setInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [shortenLink, setShortenLink] = useState("");
  // const [copiedSuccess, setCopiedSuccess] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    setHasError(false);
    await login(username, password).then((result) => {
      console.log("===== RESULT");
      console.log(result);

      if (result.isError) {
        setHasError(true);
        setIsLoading(false);
        return;
      }
      navigate("/main", {
        state: result,
      });
      setIsLoading(false);
    });
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <ContentDiv>
      <StyledBox>
        <Stack spacing={4}>
          <Title>Login</Title>
          <FormControl variant="standard">
            <InputLabel>Username</InputLabel>
            <Input id="username" value={username} onChange={onUsernameChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Password</InputLabel>
            <Input
              id="password"
              value={password}
              onChange={onPasswordChange}
              type="password"
            />
          </FormControl>
          {hasError && (
            <Alert severity="error">Invalid username or password</Alert>
          )}
          <Button variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </Stack>
      </StyledBox>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ContentDiv>
  );
};

export default LoginPage;

const StyledBox = styled(Box)`
  width: 30%;
  padding: 10px;
  margin: auto;
  align-items: center;
`;

const ContentDiv = styled.div`
  background-color: #ffffff;
  border-radius: 10px;

  @media only screen and (min-width: 280px) {
    width: 37vh;
    height: 80vh;
}

  @media only screen and (min-width: 360px) {
    width: 42vh;
    height: 80vh;
}

  @media only screen and (min-width: 375px) {
      width: 50vh;
      height: 80vh;
  }

  @media only screen and (min-width: 390px) {
    width: 42vh;
    height: 80vh;
    }

    @media only screen and (min-width: 540px) {
        width: 65vh;
    }

    @media only screen and (min-width: 667px) {
        width: 100vh;
    }

  @media only screen and (min-width: 768px) {
    width: 60vh;
  }

  @media only screen and (min-width: 830px) {
    width: 120vh;
}

@media only screen and (min-width: 912px) {
    width: 60vh;
}
  @media only screen and (min-width: 992px) {
    width: 120vh;
  }
  @media only screen and (min-width: 1200px) {
    width: 130vh;
  }

  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display flex
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: auto;
  color: #19181a;
  display: block;
`;
