import React, { useState } from "react"
import { Button, Dropdown } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { Link } from "gatsby"

const ShowCats = props => {
  const [show, setShow] = useState(false)
  return (
    <div className="categories">
      <div className={show ? "cat-buttons show-cats" : "cat-buttons"}>
        <Link to="/housing">
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
        </Link>
        <Link to="/domesticViolence">
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
        </Link>
        <Link to="/appeals">
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
        </Link>
        <Link to="/familyLaw">
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
        </Link>
        <Link to="/guardianship">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_guardianship.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Guardianship</span>
          </Button>{" "}
        </Link>
        <Link to="/employment">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_employment.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text" style={{ marginLeft: "3vw" }}>
              Employment/Unemployment
            </span>
          </Button>{" "}
        </Link>
        <Link to="/consumer">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_consumer.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Consumer & Debt</span>
          </Button>{" "}
        </Link>
        <Link to="/health">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_health.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Health & Mental Health</span>
          </Button>{" "}
        </Link>
        <Link to="/income">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_income.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Income & Benefits</span>
          </Button>{" "}
        </Link>
        <Link to="/immigration">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_immigration.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Immigration</span>
          </Button>{" "}
        </Link>
        <Link to="/safetyOthers">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_safety_others.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Safety of Others</span>
          </Button>{" "}
        </Link>
        <Link to="/other">
          <Button className="button">
            <StaticImage
              src="../assets/images/icon_other.png"
              alt="food"
              placeholder="tracedSVG" /* What will be shown while image is loading*/
              layout="constrained"
              className="logo_img"
              as="section"
            ></StaticImage>

            <span className="logo_text">Other</span>
          </Button>{" "}
        </Link>
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
