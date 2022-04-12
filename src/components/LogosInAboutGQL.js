import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "./Layout"

const LogosGQL = () => {
  const data = useStaticQuery(query)
  const paragraphs = data.allContentfulAboutUs.nodes //entire collection of elements (paragraphs of page in this case)
  const pathToImage_1 = getImage(paragraphs[0].pictures[0]) //paragrapg 0 contains the video call image
  const pathToImage_2 = getImage(paragraphs[2].pictures[0])
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
              <GatsbyImage
                image={pathToImage_1}
                alt="Meeting of Volunteers on Zoom"
                className="about_video_call"
              ></GatsbyImage>
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
            {/* {firstRichContent.map((page, index) => {
        return renderRichText(page.content, options)
      })} */}
            {renderRichText(paragraphs[0].content, options)}
          </div>
        </div>
      </div>

      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in">
            <h2>{paragraphs[1].title}</h2>
            <p className="p_bar">
              {renderRichText(paragraphs[1].content, options)}
            </p>
            <div className="content_bar_logos_1">
              {paragraphs[1].pictures.map((img, index) => {
                const pathToLogo = getImage(img)

                if (index <= 3) {
                  const h = img.description.split(" ")[0]
                  const w = img.description.split(" ")[1]
                  const link = img.description.split(" ")[2]

                  return (
                    <div className="logo_table" key={index}>
                      <div className="logo_cell" style={{ height: "60px" }}>
                        <a href={link}>
                          <GatsbyImage
                            image={pathToLogo}
                            alt={img.title}
                            style={{
                              height: h,
                              width: w === "default" ? "150px" : w,
                            }}
                            className="logo"
                          ></GatsbyImage>
                        </a>
                      </div>
                    </div>
                  )
                } else {
                  return <b key={index}></b>
                }
              })}
            </div>
            <div className="content_bar_logos_2">
              {paragraphs[1].pictures.map((img, index) => {
                const pathToLogo = getImage(img)

                if (index > 3 && index <= 8) {
                  const h = img.description.split(" ")[0]
                  const w = img.description.split(" ")[1]
                  const link = img.description.split(" ")[2]

                  return (
                    <div className="logo_table" key={index}>
                      <div className="logo_cell" style={{ height: "40px" }}>
                        <a href={link}>
                          <GatsbyImage
                            image={pathToLogo}
                            alt={img.title}
                            style={{
                              height: h,
                              width: w === "default" ? "150px" : w,
                            }}
                            className="logo"
                          ></GatsbyImage>
                        </a>
                      </div>
                    </div>
                  )
                } else {
                  return <b key={index}></b>
                }
              })}
            </div>
            <div className="content_bar_logos_3">
              {paragraphs[1].pictures.map((img, index) => {
                const pathToLogo = getImage(img)
                if (index > 8) {
                  const h = img.description.split(" ")[0]
                  const w = img.description.split(" ")[1]
                  const link = img.description.split(" ")[2]

                  return (
                    <div className="logo_table" key={index}>
                      <div className="logo_cell" style={{ height: "100px" }}>
                        <a href={link}>
                          <GatsbyImage
                            image={pathToLogo}
                            alt={img.title}
                            style={{
                              height: h,
                              width: w === "default" ? "160px" : w,
                            }}
                            className="logo"
                          ></GatsbyImage>
                        </a>
                      </div>
                    </div>
                  )
                } else {
                  return <b key={index}></b>
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in">
            <h2 style={{ textAligh: "center" }}>{paragraphs[2].title}</h2>
            <p className="p_bar">
              {renderRichText(paragraphs[2].content, options)}
            </p>
            <div className="content_bar_logos">
              <a href="https://www.mass.gov/orgs/massachusetts-court-system">
                <GatsbyImage
                  image={pathToImage_2}
                  alt={paragraphs[2].pictures[0].title}
                  className="logo"
                  style={{ height: "90px", width: "90px" }}
                ></GatsbyImage>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  //   },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <React.Fragment>{children}</React.Fragment>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} style={{ textDecorationLine: "underline" }}>
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3>{children}</h3>
    },
  },
}
const query = graphql`
  {
    allContentfulAboutUs(sort: { fields: priority, order: ASC }) {
      nodes {
        title
        content {
          raw
        }
        contentful_id
        pictures {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          description
          title
        }
      }
    }
  }
`
export default LogosGQL
