import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.div`
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    padding-top: 40px;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
   flex-grow: 1; // This allows the NavMenu to take up available space

  a {
    text-decoration: none;
    color: 'charcoal'; 
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &.active {
      background-color: #f00      color: #000;
    }

    &:hover {
      background-color: ${(props) =>
        props.theme.deepSkyBlue}; /* Slightly darker sky blue color for hover */
      color: #999;
    }
  }
`;

const Menu = () => {
    return (
      <StyledMenu><NavMenu>
            <NavLink to="travels" className={({ isActive }) => (isActive ? "active" : "")} >Travels</NavLink>
            <NavLink to="about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            <NavLink to="admin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink>
      </NavMenu></StyledMenu>
    );
  };
  export default Menu;