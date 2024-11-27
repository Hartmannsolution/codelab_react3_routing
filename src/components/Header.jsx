import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.div`
    background-color: #f0f0f0;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 26px;
    margin: 0 0 20px 0; // top right bottom left
    // padding: 20px;
    // border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const StyledButton = styled.button`
    background-color: #f0f0f0;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
    <Logo />
    <p>Bornholmer tours</p>
      <StyledButton><NavLink to="/login">login</NavLink></StyledButton>
    </StyledHeader>
  );
};
export default Header;
