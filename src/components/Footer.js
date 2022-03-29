import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="white_band" style={{ marginBottom: "200px" }}>
      <div className="content_bar">
        <div className="content_bar_in" style={{ borderBottom: "0px solid" }}>
          <center>
            <Link to="/privacy" className="litelink">
              Privacy Policy & Terms of Use
            </Link>{" "}
            |{" "}
            <a href="mailto:massaccess@suffolk.edu" className="litelink">
              Contact Us
            </a>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Footer
