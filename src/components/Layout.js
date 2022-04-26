import React, { useState, callbackFunction } from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/main.css"
import "normalize.css"
import GlobalContextProvider from "../context/globalContextProvider"

const Layout = props => {
  const { children } = props

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
