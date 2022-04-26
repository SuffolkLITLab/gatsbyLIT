import React, { useContext } from "react"
import { Link } from "gatsby"
import {
  globalDispatchContext,
  globalStateContext,
} from "../context/globalContextProvider"

const Footer = () => {
  const state = useContext(globalStateContext)
  return (
    <div className="white_band" style={{ marginBottom: "200px" }}>
      <div className="content_bar">
        <div className="content_bar_in" style={{ borderBottom: "0px solid" }}>
          <center>
            <Link to="/privacy" className="litelink">
              {state.lang === "en-US"
                ? "Privacy Policy & Terms of Use"
                : "Política de Privacidad y Términos de Uso"}
            </Link>{" "}
            |{" "}
            <a href="mailto:massaccess@suffolk.edu" className="litelink">
              {state.lang === "en-US" ? "Contact Us" : "Contacte con Nosotros"}
            </a>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Footer
