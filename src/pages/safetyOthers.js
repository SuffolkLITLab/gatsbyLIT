import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import { Button } from "react-bootstrap"
import { IoMdArrowDropright } from "react-icons/io"

const Safety = () => {
  const data_page = useStaticQuery(query)
  const nodes_page = data_page.allContentfulForm.nodes
  const node_page_footer = data_page.allContentfulFormPageFooter.nodes[0]
  return (
    <Layout>
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_in_text">
            <center>
              <h1>Safety of Others</h1>
            </center>
          </div>
        </div>
      </div>
      {nodes_page.map((node, index) => {
        return (
          <div className="white_band" key={index}>
            <div className="content_bar">
              <div className="content_bar_description">
                <a
                  className="anchor"
                  href={"#" + node.classname}
                  id={node.classname}
                ></a>
                <h2 className="blue">{node.title}</h2>
                <div className="desc_table">
                  <div className="desc_cell">
                    {renderRichText(node.content, options)}
                  </div>
                  <div className="desc_cell">
                    <a href={node.linkToForm}>
                      <Button
                        type="startForm"
                        value="startForm"
                        className="start_form"
                        style={{ float: "right" }}
                      >
                        Start Form
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="white_band">
        <div className="content_bar">
          <div className="content_bar_description">
            <div className="desc_table">
              <div className="desc_cell">
                <h2 className="help_listing">{node_page_footer.title}</h2>
                {renderRichText(node_page_footer.content, options_footer)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const options_footer = {
  renderMark: {
    [MARKS.BOLD]: text => (
      <mark>
        <b className="font-bold">{text}</b>
      </mark>
    ),
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
  },
}

const options = {
  renderMark: {
    [MARKS.BOLD]: text => (
      <mark>
        <b className="font-bold">{text}</b>
      </mark>
    ),
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
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return (
        <li>
          <IoMdArrowDropright style={{ marginLeft: "20px" }} />
          {" " + UnTaggedChildren}
        </li>
      )
    },
  },
}

const query = graphql`
  {
    allContentfulForm(
      filter: {
        metadata: { tags: { elemMatch: { name: { eq: "Safety of Others" } } } }
      }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        title
        content {
          raw
        }
        linkToForm
        classname
      }
    }
    allContentfulFormPageFooter(
      filter: { metadata: { tags: { elemMatch: { name: { eq: "General" } } } } }
    ) {
      nodes {
        content {
          raw
        }
        title
      }
    }
  }
`

export default Safety
