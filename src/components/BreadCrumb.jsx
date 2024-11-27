import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledBreadCrumb = styled.div`
  background-color: #f0f0f0;
  margin: 0 0 20px 0; // top right bottom left
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BreadCrumb = () => {
  const location = useLocation();
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(location.pathname);
    setCount(count + 1);
  }, [location]);

  return (
    <StyledBreadCrumb>
      <div>home {window.location.pathname.replace("/", " → ")}</div>   {count} updates
    </StyledBreadCrumb>
  );
};
export default BreadCrumb;
