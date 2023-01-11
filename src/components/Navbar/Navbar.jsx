import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(prop) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbar = document.getElementById(prop.id);

  if (offset > 100) {
    navbar.classList.add("shadow");
  } else if (offset < 100 && navbar !== null) {
    navbar.classList.remove("shadow");
  }

  return (
    <>
      <section id={prop.id} className="navigation px-5">
        <div className="nav-container">
          <div className="brand">
            <NavLink className="logotxt" to="/">
              CONNECT{" "}
              <span style={{ color: "#524dd0", fontWeight: "600" }}>BLOCK</span>
            </NavLink>
            {/* <img className="logo" src={companyLogo} alt="" /> */}
          </div>
          <nav>
            <div className="nav-mobile">
              <NavLink id="nav-toggle" to="/">
                <span />
              </NavLink>
            </div>
            <ul className="nav-list">
              <li>
                <NavLink activeClassName="active" id={prop.home} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  id={prop.service}
                  to="services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  id={prop.product}
                  to="products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" id={prop.games} to="games">
                  Games
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
