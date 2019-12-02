import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0px 24px;
  display: flex;
  align-items: center;
  background: #ecececec;
  height: 56px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  transition: 1s;
  position: fixed;

  box-shadow: ${props =>
    props.onScrollTop ? "0 1px 6px 3px rgba(0, 0, 0, 0.15)" : "none"};
  margin-top: ${props => (props.onScrollTop ? "0px" : "-116px")};
`;

export const Logo = styled.a`
  display: flex;
`;

export const NavLink = styled(Link)`
  height: 24px;
  display: flex;
  text-decoration: none;
  color: #000;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  transition: 0s;

  &:hover {
    margin-top: 1px;
    border-bottom: 1px solid #000;
  }
`;
