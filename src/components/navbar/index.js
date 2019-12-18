import React, { useEffect, useState } from "react";
import { NavLink, Container, Logo } from "./styles";
import logo from "../../assets/icone.png";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [onScrollTop, setOnScrollTop] = useState(true);

  function logit() {
    setOnScrollTop(scrollY > window.pageYOffset);
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <Container scrollTop={onScrollTop}>
        <NavLink to="/">INÍCIO</NavLink>
        <Logo href="/">
          <img src={logo} alt="Placeholder" />
        </Logo>
        <NavLink to="/management">ADMIN</NavLink>
      </Container>
    </>
  );
}
