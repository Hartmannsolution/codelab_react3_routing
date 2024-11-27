import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Header from "./components/Header";
import BreadCrumb from "./components/BreadCrumb";
import Menu from "./components/Menu";
import styled from "styled-components";
import './App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80vh;
`;

const StyledHome = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  padding: 20px;
  margin-left: 20px;
`;

const App = () => {

  const [user, setUser] = useState({ username: "", roles: ["admin","user"] });

  return (
    <StyledApp>
      <Header />
      <BreadCrumb />
      <SubContainer>
        <Menu />
        <StyledHome>
          <Outlet context={{user, setUser}} />
        </StyledHome >
      </SubContainer>
    </StyledApp>
  );
};
export default App;
