import React from "react"
import Layout from "../components/Layout"
import Form from "react-bootstrap/Form"
import "../assets/css/main.css"

export default function Home() {
  return (
    <Layout>
      <div className="divTable" style={{ backgroundColor: "#e6ecfc" }}>
        <div className="divRow">
          <div className="divCell_desc">
            <div className="spot_description">
              <h1>Find and file court forms online during the emergency</h1>
              <p>
                This site offers a way for you to reach the court during the
                COVID-19 crisis. It provides court forms and self-help materials
                for areas of urgent legal need. Describe your issue here, and
                our issue spotter will look for helpful resources. You can also
                browse forms below by category.
              </p>
            </div>
          </div>
          <div className="divCell_input" style={{ backgroundColor: "#fff" }}>
            <div className="spot_input">
              {/* <div
                style={{
                  display: "none",
                  float: "left",
                  backgroundColor: "#eee",
                  width: "100%",
                  margin: "0 0 20px 0",
                  padding: "0 15px",
                  boxSizing: "border-box",
                  border: "solid 1px #555",
                }}
              ></div> */}
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ margin: "25px 0 0 0" }}>
                    <h2>What seems to be the problem?</h2>
                  </Form.Label>
                  <Form.Control
                    placeholder="Share your story"
                    as="textarea"
                    style={{ borderRadius: "0.6rem" }}
                  />
                  <br></br>
                  <Form.Text style={{ color: "gray" }}>
                    Reply should be at least 5 words long. Longer replies get
                    better results. Do <b>NOT</b> include identifying
                    information like your name or address.
                  </Form.Text>
                </Form.Group>
              </Form>
              {/*
              <label className="text">
                <h2
                  style={{
                    textAlign: "center",
                    margin: "3px 0 4px 0",
                    fontWeight: "normal",
                  }}
                ></h2>
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
