import "./About.css";
import mora from "../assets/mora.jpeg";
import manuel from "../assets/manuel.jpeg";
import jhon from "../assets/jhon.jpeg";
import fabian from "../assets/fabian.jpeg";

export function About() {
  return (
    <main className="app-container">
      <section>
        <h1 className="about__title">Presentación integrantes</h1>
        <article className="about__card">
          <div className="about__card--image">
            <img src={mora} alt="foto Cristian Mora" />
          </div>
          <div className="about__card--detail">
            <h2>Cristian Mora</h2>
            <p>
              Hola, ¿qué tal?, soy el chico de las poesías. Te contaré un poco
              sobre mí. Actualmente me encuentro finalizando mi carrera
              profesional del programa Administración de Empresas, también hago
              parte del porcentaje de desempleados de este país, sin embargo
              estoy enfocado en proyectos propios y de desarrollo personal.
            </p>
            <p>
              Me fascina la idea de viajar y conocer lugares siempre y cuando
              sea sobre una motocicleta, que me permita controlar mis tiempos y
              mis recorridos. Otra parte importante es el campo laboral del que
              he sido partícipe el cuál son las ventas de productos masivos en
              donde también se relaciona con otra de mis aficiones la cual es el
              relacionamiento continuo, como quien dice, hacerse amigo hasta del
              perro.
            </p>
            <p>
              Para conocernos un poco mejor, te espero en{" "}
              <a
                href="https://www.instagram.com/mora_robledo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mora_robledo.
              </a>{" "}
            </p>
          </div>
        </article>
        <article className="about__card">
          <div className="about__card--image">
            <img src={fabian} alt="foto Fabian Gomez" />
          </div>
          <div className="about__card--detail">
            <h2>Fabian Gomez</h2>
            <p>
              ¡Hola gente bella! Me entusiasma profundamente el mundo de la
              tecnología y tengo un amor innato por compartir conocimientos,
              además de una pasión por descubrir y disfrutar de todo tipo de
              delicias culinarias. He tenido el honor de guiar a más de 120
              estudiantes en su viaje de aprendizaje en programación. Estoy
              convencido de que la enseñanza no solo beneficia a los demás, sino
              que también consolida mi propia comprensión de los temas. Ver cómo
              mis estudiantes comprenden nuevos conceptos y desarrollan sus
              habilidades de programación me llena de alegría y satisfacción.
            </p>
            <p>
              Actualmente, soy desarrollador de software y simultáneamente
              ejerzo como docente de programación. Mi ambición no se detiene
              aquí; como estudiante de administración de empresas, aspiro a
              liderar proyectos increíbles que marquen la diferencia en el
              ámbito empresarial y tecnológico. Mi objetivo es fusionar mis
              habilidades técnicas con mi conocimiento en administración para
              crear soluciones innovadoras y liderar equipos hacia el éxito.
            </p>
          </div>
        </article>
        <article className="about__card">
          <div className="about__card--image">
            <img src={jhon} alt="foto Jhon Erick Hidalgo" />
          </div>
          <div className="about__card--detail">
            <h2>Jhon Erick Hidalgo</h2>
            <p>
              Estudiante de décimo semestre del programa académico de
              Administración de empresas en la Universidad del Valle.
              Actualmente asesor comercial en el banco Davivienda, y técnico en
              Asesoría Comercial del SENA. Apasionado por lo que realizo todos
              los días, y fiel creyente de que todo con esfuerzo se puede dar.
            </p>
          </div>
        </article>
        <article className="about__card">
          <div className="about__card--image">
            <img src={manuel} alt="foto Manuel Ordoñez" />
          </div>
          <div className="about__card--detail">
            <h2>Manuel Ordoñez</h2>
            <p>
              Hello, soy un jovencito de 37 años, nací en Pereira, pero llevo
              gran parte de mi vida en Cali, tengo 2 hijas preciosas y una
              esposa que amo con todo mi corazón con la cual llevo 13 años de
              feliz matrimonio, actualmente lidero un emprendimiento de prendas
              personalizadas en especial las de grado once en los colegios.
            </p>
            <p>
              Actualmente curso octavo semestre factorial, de administración de
              empresas, la cual me ha servido muchísimo para mi emprendimiento,
              otra pasión que tengo es la cocina y me considero muy bueno a
              pesar de que jamás he hecho ningún estudio en el tema.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
