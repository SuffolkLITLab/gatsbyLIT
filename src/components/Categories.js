import React, { useState, useContext } from "react"
import { Button, Dropdown } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { Link } from "gatsby"
import {
  globalDispatchContext,
  globalStateContext,
} from "../context/globalContextProvider"

const ShowCats = props => {
  const [show, setShow] = useState(false)

  const state = useContext(globalStateContext)
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
            <span className="logo_text">
              {state.lang === "en-US" ? "Housing" : "Alojamiento"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US"
                ? "Domestic Violence"
                : "Violencia Domestica"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Appeals" : "Apelaciones"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Family Law" : "Ley Familiar"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Guardianship" : "Guarda y Custodia"}
            </span>
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
              {state.lang === "en-US"
                ? "Employment/Unemployment"
                : "Empleo / Desempleo"}
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Consumer & Debt" : "Deuda"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US"
                ? "Health & Mental Health"
                : "Salud y Salud Mental"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US"
                ? "Income & Benefits"
                : "Ingreso y Beneficios"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Immigration" : "Inmigración"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US"
                ? "Safety of Others"
                : "Seguridad de Otros"}
            </span>
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

            <span className="logo_text">
              {state.lang === "en-US" ? "Other" : "Más"}
            </span>
          </Button>{" "}
        </Link>
      </div>
      <Dropdown onClick={() => setShow(!show)}>
        <div className="show_table_btn" style={{ fontSize: "17px" }}>
          {state.lang === "en-US"
            ? show
              ? "Hide"
              : "Show"
            : show
            ? "Esconde"
            : "Muestra"}{" "}
          {state.lang === "en-US" ? "Categories" : "Categorias"}
          <div className="arrow">
            {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
        </div>
      </Dropdown>
    </div>
  )
}

export default ShowCats
