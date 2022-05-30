import React, { useEffect, useState } from "react";
import "../css/app/navbar.css";
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  const handleResize = () => {
    if (window.innerWidth > 700)
      setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  })




  let navmenuClasses = ['nav-links-mobile'];
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  if (isMobile) {
    navmenuClasses.push('scrolled');
    navbarClasses.push('scrolled');
    document.body.style.overflow = "hidden";
  }
  else
    document.body.style.overflow = "auto"




  return (
    <header className={navbarClasses.join(" ")}>

      <nav className="navigation">

        <NavLink exact to="/" className="logo">
          <div className="firstpoint"></div>
          [Titus]
        </NavLink>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} >
          <NavLink to="/timeline" activeClassName="active" onClick={() => setIsMobile(false)}>Cronologie</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={() => setIsMobile(false)}>Despre</NavLink>
          <NavLink to="/projects/all" activeClassName="active" onClick={() => setIsMobile(false)}>Proiecte</NavLink>
        </ul>
        <div className="mobile-menu-icon">
          <Hamburger toggled={isMobile} rounded={true} color="white" onToggle={() => setIsMobile(!isMobile)} />
        </div>
      </nav>

    </header>
  )
};
export default Navbar;