import { Link } from "react-router-dom";
import hero from "../assets//hero.jpg";
import "./Home.css";

export function Home() {
  return (
    <main className="app-container">
      <section className="hero">
        <h1 className="hero__title">
          Transforma Desafíos en Oportunidades{" "}
          <span className="hero__title--detail">Decisiones en Éxito</span>
        </h1>
        <p>
          Bienvenido a DeciLab, tu laboratorio digital de soluciones
          empresariales. En el mundo complejo de los negocios, cada problema es
          una oportunidad disfrazada y cada decisión es una puerta hacia el
          éxito.
        </p>
        <p>Conoce un poco más sobre nosotros con el siguiente caso de éxito</p>
        <Link to="/empresa" className="hero__button">
          Conoce más
        </Link>
        <img className="hero__background" src={hero} alt="Toma de decisiones" />
      </section>
    </main>
  );
}
