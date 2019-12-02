import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  background: linear-gradient(#90ccf477, #f3d25077);
  padding: 24px;
  padding-top: 80px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background: #999999;
  border-radius: 16px;
  max-width: 1000px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 2px solid #ececec;
  border-radius: inherit;
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #ececec;
  height: 50px;
  width: 100px;
  border-bottom: 1px solid #ececec;
  padding: 5px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background: #a3d250;
  }
`;

export const Title = styled.h3`
  margin: 10px 0;
`;
