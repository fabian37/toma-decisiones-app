import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div>DeciLab</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/herramientas">Herramientas</Link>
          </li>
          <li>
            <Link to="/bibliografia">Bibliografía</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
