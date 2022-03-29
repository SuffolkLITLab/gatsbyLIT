import React from "react"

import NavBar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/main.css"
import "normalize.css"

const Layout = props => {
  const { children } = props

  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
