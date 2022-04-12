import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/LIT_logo.jpg"
import { NavDropdown } from "react-bootstrap"
import ShowCats from "./Categories"
import "../assets/css/main.css"

const NavBar = () => {
  const [show, setShow] = useState(false)
  // const [logoIsVisible, setLogo] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <main>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="lit logo"></img>
            </Link>
            <Link to="/">
              <span style={{ fontSize: "15px" }}>
                Court Forms Online <h5>MassAccess</h5>
              </span>
            </Link>
            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            {/*this is the toggle functionality of the nav-btn */}

            <Link
              to="/aboutUs"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)} //when you go to another page, the nav drop-down menu closes
            >
              about us
            </Link>
            <Link
              to="/news"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              news
            </Link>
            <Link
              to="/myforms"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              my forms
            </Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Languages"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onToggle={() => setIsClicked(!isClicked)}
              show={isClicked || isHovered}
              className="nav-drop"
            >
              <NavDropdown.Item href="/">English</NavDropdown.Item>

              <NavDropdown.Item href="/">Español</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
      <ShowCats />
    </main>
  )
}

export default NavBar
