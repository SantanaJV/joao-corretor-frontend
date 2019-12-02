import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(144, 204, 244, 0.4),
      rgba(243, 210, 80, 0.3)
    ),
    url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  max-height: 60vh;
`;

export const Content = styled.div`
  display: flex;
  height: 1200px;
`;

export const Title = styled.div`
  text-align: center;
`;

export const Main = styled.h1`
  font-weight: 400;
  font-size: 4rem;
`;
export const Sub = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
`;
