import logo from '../assets/boat.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 6px;
`;
export default function Logo() {
  return (
    <LogoContainer>
        <img src={logo} alt="logo" width="70" height="70" /> 
    </LogoContainer>
  );
}