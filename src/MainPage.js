import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("==== USER");
  console.log(state);

  const onLogout = () => {
    navigate(-1);
  };

  return (
    <ContentDiv>
      <StyledBox>
        <Stack spacing={2}>
          <Stack direction="row">
            <Title>User Information</Title>
            <Button variant="text" onClick={onLogout}>
              Logout
            </Button>
          </Stack>
          <Stack direction="row">
            <h3>Name: </h3>
            &nbsp;
            <h3>{state.name}</h3>
          </Stack>
          <Stack direction="row">
            <h3>Username: </h3>
            &nbsp;
            <h3>{state.username}</h3>
          </Stack>
          <Stack direction="row">
            <h3>Role: </h3>
            &nbsp;
            <h3>{state.role}</h3>
          </Stack>
          {state.role === "MANAGER" && (
            <Stack direction="row">
              <h3>Restricted webpage: </h3>
              &nbsp; &nbsp;
              <h3>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  secret
                </a>
              </h3>
            </Stack>
          )}
        </Stack>
      </StyledBox>
    </ContentDiv>
  );
};

export default MainPage;

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
