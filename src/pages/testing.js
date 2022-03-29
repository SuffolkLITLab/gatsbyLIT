import React from "react"
import Layout from "../components/Layout"
// import { page, text } from "../examples/about.module.css"
// import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Logos from "../components/LogosInAbout"
import LogosGQL from "../components/LogosInAboutGQL"

const About = () => {
  return (
    <Layout>
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in_text">
            <center>
              <h1>About Us</h1>
            </center>
          </div>
        </div>
      </div>

      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in_text">
            <div className="r_img_embed">
              <StaticImage
                src="../assets/images/video_call.png"
                alt="Meeting of Volunteers on Zoom"
                placeholder="tracedSVG" /* What will be shown while image is loading*/
                layout="constrained"
                as="section"
                className="about_video_call"
              ></StaticImage>
              <div className="caption">
                screen shot from one of our{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLy6i9GFGw5GzcPqGyZQ06lPp35v6S5-YF"
                  style={{ textDecoration: "underline" }}
                >
                  regular meeting calls
                </a>
              </div>
            </div>
            <h2>the document assembly line project</h2>
            <p>
              MassAccess was created and is maintained by the Document Assembly
              Line Project. The project is run out of Suffolk Law's{" "}
              <a
                href="https://suffolklitlab.org/"
                style={{ textDecoration: "underline" }}
              >
                Legal Innovation and Technology Lab{" "}
              </a>
              in cooperation with the{" "}
              <a
                href="http://www.massa2j.org/a2j/"
                style={{ textDecoration: "underline" }}
              >
                Access to Justice Commission's
              </a>{" "}
              COVID-19 task force. It is staffed by a collection of volunteers,
              and operates as an assembly line to rapidly create mobile-friendly
              accessible versions of online court forms and self-help materials
              in multiple-languages for key areas of urgent legal need during
              the COVID-19 crisis.
            </p>
            <p>
              Though we are focused on MA specific content, we are sharing our
              work{" "}
              <a
                href="https://github.com/SuffolkLITLab/doc-assembly-line"
                style={{ textDecoration: "underline" }}
              >
                on GitHub
              </a>{" "}
              in the hopes that our efforts can be replicated in other
              jurisdictions. All novel code we generate will be licensed under
              an{" "}
              <a
                href="https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/LICENSE"
                style={{ textDecoration: "underline" }}
              >
                MIT license
              </a>{" "}
              , and we're intentionally building on the open source{" "}
              <a
                href="https://docassemble.org/"
                style={{ textDecoration: "underline" }}
              >
                docassemble
              </a>{" "}
              platform.
            </p>
            <h3 style={{ fontSize: "20px", fontFamily: "Arial" }}>
              What to Volunteer?
            </h3>
            <p>
              Learn more, including how you can volunteer, on
              <a
                href="https://suffolklitlab.org/doc-assembly-line/"
                style={{ textDecoration: "underline" }}
              >
                on the project's website
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in">
            <h2>Thank You</h2>
            <p className="p_bar">
              We are thankful to those organizations and businesses who have
              donated the time of their members/employees. We are also thankful
              to those volunteers who have given generously of their own time.
            </p>
            <Logos />
          </div>
        </div>
      </div>
      <div className="page"></div>
    </Layout>
  )
}

export default About

// <div className="content_bar_logos_1">
//               <div className="logo_table">
//                 <div className="logo_cell">
//                   <Link to="https://suffolklitlab.org/">
//                     <StaticImage
//                       src="../assets/images/lit_logo.png"
//                       alt="LIT lab logo"
//                       placeholder="tracedSVG" /* What will be shown while image is loading*/
//                       layout="constrained"
//                       as="section"
//                       style={{ height: "50px", width: "58px" }}
//                       className="logo"
//                     ></StaticImage>
//                   </Link>
//                 </div>
//               </div>
//               <div className="logo_table">
//                 <div className="logo_cell" style={{ height: "60px" }}>
//                   <Link to="https://www.suffolk.edu/law">
//                     <StaticImage
//                       src="../assets/images/suffolk_law.png"
//                       alt="Suffolk Law logo"
//                       placeholder="tracedSVG" /* What will be shown while image is loading*/
//                       layout="constrained"
//                       as="section"
//                       style={{ height: "45px", width: "320px" }}
//                       className="law_logo"
//                     ></StaticImage>
//                   </Link>
//                 </div>
//               </div>
//               <div className="logo_table">
//                 <div className="logo_cell">
//                   <Link to="http://www.massa2j.org/a2j/">
//                     <StaticImage
//                       src="../assets/images/a2j_logo.png"
//                       alt="A2J logo"
//                       placeholder="tracedSVG" /* What will be shown while image is loading*/
//                       layout="constrained"
//                       as="section"
//                       style={{ height: "35px", width: "141px" }}
//                       className="logo"
//                     ></StaticImage>
//                   </Link>
//                 </div>
//               </div>
//               <div className="logo_table">
//                 <div className="logo_cell">
//                   <Link to="http://www.massa2j.org/a2j/">
//                     <StaticImage
//                       src="../assets/images/docassemble_logo.png"
//                       alt="docassemble logo"
//                       placeholder="tracedSVG" /* What will be shown while image is loading*/
//                       layout="constrained"
//                       as="section"
//                       style={{ height: "60px", width: "131px" }}
//                       className="logo"
//                     ></StaticImage>
//                   </Link>
//                 </div>
//               </div>
//             </div>
