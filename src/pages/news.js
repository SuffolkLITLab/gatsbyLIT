import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { IoMdArrowDropright } from "react-icons/io"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const News = () => {
  const data_page = useStaticQuery(query)
  const nodes_page = data_page.allContentfulBlogPost.nodes

  const convertStringToDate = date => {
    let dateComponents = date.split("T")
    let datePieces = dateComponents[0].split("-")
    let timePieces = dateComponents[1].split("-")[0].split(":")
    return new Date(
      datePieces[0],
      datePieces[1] - 1,
      datePieces[2],
      timePieces[0],
      timePieces[1]
    )
  }
  // console.log(convertStringToDate("2022-04-11T15:30-04:00"))
  return (
    <Layout>
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in_text">
            <center>
              <h1>News</h1>
            </center>
          </div>
        </div>
      </div>
      {nodes_page.map((node, index) => {
        if (node.videoLink !== null) {
          return (
            <div className="white_band" key={index}>
              <div className="content_bar">
                <div className="content_bar_in_text">
                  <div className="vid_wrapper_right">
                    <div className="profile_vid_right">
                      <iframe
                        className="embed_vid"
                        src={node.videoLink}
                        allow="encrypted-media"
                        frameBorder="0"
                        gesture="media"
                      />
                    </div>
                  </div>
                  <h2>{node.title}</h2>
                  {renderRichText(node.content, options)}
                  <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                    {"Updated: " +
                      node.updated.split("T")[0] +
                      " " +
                      node.updated.split("T")[1].split("-")[0]}
                  </p>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="white_band">
              <div className="content_bar">
                <div className="content_bar_in_text">
                  {renderRichText(node.content, options)}
                  <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                    {"Updated: " +
                      node.updated.split("T")[0] +
                      " " +
                      node.updated.split("T")[1].split("-")[0]}
                  </p>
                </div>
              </div>
            </div>
          )
        }
      })}
    </Layout>
  )
}

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,

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
    [BLOCKS.LIST_ITEM]: (node, children) => {
      //to force list render without a <p> inside
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return <li style={{ fontSize: "medium" }}>{UnTaggedChildren}</li>
    },
  },
}

const query = graphql`
  {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: updated, order: DESC }
    ) {
      nodes {
        updated
        title
        content {
          raw
        }
        videoLink
      }
    }
  }
`

export default News
