import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

// import "bootstrap/dist/css/bootstrap.css"

const Popup = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <section>
        <Button
          style={{ backgroundColor: "orange", border: "none" }}
          onClick={handleShow}
          className="start_form"
        >
          In progress
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>courtformsonline.org says</Modal.Title>
          </Modal.Header>
          <Modal.Body>Not available at this time</Modal.Body>
          <Modal.Footer>
            <Button style={{ padding: "10px" }} onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  )
}

export default Popup
