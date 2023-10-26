import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ThemeBtn } from "./ThemeBtn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlerToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link onClick={handlerToggle} className="header__title" to="/">
          DeciLab
        </Link>
      </div>
      <nav className="nav">
        <ul className={`nav__list ${isOpen ? "open" : ""}`}>
          <li className="nav__list-item">
            <Link onClick={handlerToggle} to="/">
              Inicio
            </Link>
          </li>
          <li className="nav__list-item">
            <Link onClick={handlerToggle} to="/nosotros">
              Nosotros
            </Link>
          </li>
          <li className="nav__list-item">
            <Link onClick={handlerToggle} to="/empresa">
              Empresa
            </Link>
          </li>
          <li className="nav__list-item">
            <Link onClick={handlerToggle} to="/herramientas">
              Herramientas
            </Link>
          </li>
          <li className="nav__list-item">
            <Link onClick={handlerToggle} to="/bibliografia">
              Bibliografía
            </Link>
          </li>
          <ThemeBtn />
        </ul>
      </nav>
      <div className="menu">
        <label htmlFor="burger" className="menu__burger">
          <input
            id="burger"
            type="checkbox"
            onChange={handlerToggle}
            checked={isOpen}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
}
