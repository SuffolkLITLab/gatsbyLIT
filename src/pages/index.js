import React from "react"
import Layout from "../components/Layout"
// import { page, text } from "../examples/home.module.css"
// import { ExampleButton } from "../examples/button"
// import Images from "../examples/images"
// import { StaticImage } from "gatsby-plugin-image"
// import Testing from "./testing_props"
// import FetchData from "../examples/fetchData"
// import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          {/* <div className="hero-container"> */}
          <div className="hero-text">
            <h1 style={{ color: "black" }}>Home page</h1>
            {/* <h4 style={{ color: "black" }}>LIT</h4> */}
          </div>
          {/* </div> */}
        </header>
      </main>
    </Layout>
  )
}
