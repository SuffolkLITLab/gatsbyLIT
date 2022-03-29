import React, { useState } from "react"
import { Button, Dropdown } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const ShowCats = props => {
  const [show, setShow] = useState(false)
  return (
    <div className="categories">
      <div className={show ? "cat-buttons show-cats" : "cat-buttons"}>
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Housing</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_domestic_violence.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Domestic Violence</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_appeals.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Appeals</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_family.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Family Law</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Guardianship</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_guardianship.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
        <Button className="button">
          <StaticImage
            src="../assets/images/icon_housing.png"
            alt="food"
            placeholder="tracedSVG" /* What will be shown while image is loading*/
            layout="constrained"
            className="logo_img"
            as="section"
          ></StaticImage>

          <span className="logo_text">Primary</span>
        </Button>{" "}
      </div>
      <Dropdown onClick={() => setShow(!show)}>
        <div className="show_table_btn">
          {show ? "Hide" : "Show"} Categories
          <div className="arrow">
            {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
        </div>
      </Dropdown>
    </div>
  )
}

export default ShowCats
