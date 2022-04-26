import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/LIT_logo.jpg"
import { NavDropdown } from "react-bootstrap"
import ShowCats from "./Categories"
import "../assets/css/main.css"
import {
  globalDispatchContext,
  globalStateContext,
} from "../context/globalContextProvider"

const NavBar = props => {
  const dispatch = useContext(globalDispatchContext)
  const state = useContext(globalStateContext)

  const [show, setShow] = useState(false)
  // const [logoIsVisible, setLogo] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  // const [isClicked, setIsClicked] = useState(false)

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
              {state.lang === "en-US" ? "about us" : "Quienes Somos"}
            </Link>
            <Link
              to="/news"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              {state.lang === "en-US" ? "news" : "Noticias"}
            </Link>
            <Link
              to="/myforms"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              {state.lang === "en-US" ? "my forms" : "Mis Formularios"}
            </Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title={state.lang === "en-US" ? "Languages" : "Idiomas"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              // onToggle={() => setIsClicked(!isClicked)}
              show={isHovered}
              className="nav-drop"
            >
              <NavDropdown.Item
                /*onClick={() => props.setLang("en-US")}*/ onClick={() => {
                  dispatch({ type: "CHANGE_ENG" })
                }}
              >
                English
              </NavDropdown.Item>

              <NavDropdown.Item
                /*onClick={() => props.setLang("es")}*/ onClick={() => {
                  dispatch({ type: "CHANGE_ES" })
                }}
              >
                Español
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
      <ShowCats />
    </main>
  )
}

export default NavBar
