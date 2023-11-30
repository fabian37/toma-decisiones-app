import "./Tools.css";
import foda from "../assets/foda.jpg";
import fish from "../assets/fish.png";
import porter from "../assets/porter.png";

export function Tools() {
  return (
    <main className="app-container">
      <section>
        <h1>Herramientas</h1>
        <p>
          Las siguientes herramientas de toma de decisiones fueron utilizadas
          con base en la problemática planteada sobre el uso y popularización de
          aceites sintéticos en el mercado de lubricantes.
        </p>
        <h2 className="tools__subtitle">
          Primera herramienta: Matriz FODA para los aceites sintéticos
        </h2>
        <p>
          Se emplea la matriz FODA analizando las fortalezas, oportunidades,
          debilidaes y amenazas sobre la implementación de los aceites
          sintéticos en el negocio. Se identifican las siguientes variables:
        </p>
        <img className="tools__image" src={foda} alt="Matriz foda" />
        <h3 className="tools__subtitle-h3">Estrategias Recomendadas:</h3>
        <ul className="tools__list">
          <li>
            Aprovechar Fortalezas para Innovación: Utilizar la resistencia y
            durabilidad de los aceites sintéticos para desarrollar productos
            innovadores que satisfagan las necesidades del mercado de alto
            rendimiento.
          </li>
          <li>
            Educación del Consumidor: Implementar campañas educativas para
            aumentar la conciencia del consumidor sobre los beneficios de los
            aceites sintéticos, abordando posiblemente las preocupaciones
            ambientales.
          </li>
          <li>
            Diversificación de Productos: Diversificar la oferta de productos
            para abordar diferentes segmentos del mercado, incluyendo aquellos
            que aún prefieren lubricantes convencionales.
          </li>
          <li>
            Monitoreo de Regulaciones Ambientales: Estar al tanto de las
            regulaciones ambientales y ajustar las estrategias de producción y
            marketing en consecuencia.
          </li>
          <li>
            Colaboración y Alianzas Estratégicas: Considerar colaboraciones con
            fabricantes de vehículos de alto rendimiento y maquinaria industrial
            para aumentar la adopción de aceites sintéticos en aplicaciones
            críticas.
          </li>
          <li>
            Estrategias de Precios Competitivos: Desarrollar estrategias de
            precios competitivos para enfrentar la competencia en el mercado y
            mantener la rentabilidad.
          </li>
        </ul>
        <h2 className="tools__subtitle">
          Segunda herramienta: Diagrama Ishikawa para los aceites sintéticos
        </h2>
        <p>
          Problema: Adopción de Aceites Sintéticos en Distri Lubricantes Kar
        </p>
        <img className="tools__image" src={fish} alt="Diagrama Ishikawa" />
        <h3 className="tools__subtitle-h3">
          Plan de Acción - Mejora de la Adopción de Aceites Sintéticos
        </h3>
        <ol className="tools__list--ordered">
          <li>Proceso:</li>
          <ul>
            <li>Proceso de adquisición de aceites sintéticos:</li>
            <ul>
              <li>
                Establecer un equipo de compras que investigue y compare las
                opciones de aceites sintéticos disponibles en el mercado.
              </li>
              <li>
                Crear un criterio claro y documentado para la selección de
                proveedores basado en la calidad, precio y sostenibilidad.
              </li>
            </ul>
            <li>Proceso de introducción de nuevos productos:</li>
            <ul>
              <li>
                Mejorar la comunicación interna sobre las características y
                beneficios de los aceites sintéticos mediante sesiones de
                capacitación.
              </li>
              <li>
                Implementar pruebas piloto antes de la introducción completa de
                nuevos productos.
              </li>
            </ul>
          </ul>
          <li>Personas:</li>
          <ul>
            <li>Conocimiento del personal sobre aceites sintéticos:</li>
            <ul>
              <li>
                Diseñar un programa de capacitación regular para educar al
                personal sobre las propiedades y beneficios de los aceites
                sintéticos.
              </li>
              <li>
                Crear material informativo que destaque las ventajas y mitigue
                los temores asociados con la adopción.
              </li>
            </ul>
            <li>Capacitación y concientización del equipo:</li>
            <ul>
              <li>
                Establecer campañas internas que destaquen la importancia
                estratégica de la transición.
              </li>
              <li>
                Facilitar foros de discusión para abordar preguntas y
                preocupaciones del equipo.
              </li>
            </ul>
          </ul>
          <li>Equipos:</li>
          <ul>
            <li>Compatibilidad de los equipos con aceites sintéticos:</li>
            <ul>
              <li>
                Realizar una auditoría de compatibilidad de equipos actuales con
                aceites sintéticos.
              </li>
              <li>
                Coordinar modificaciones necesarias para garantizar la
                compatibilidad.
              </li>
            </ul>
            <li>Necesidades de mantenimiento relacionadas con la adopción:</li>
            <ul>
              <li>
                Desarrollar un programa de mantenimiento específico para equipos
                que utilizan aceites sintéticos.
              </li>
              <li>
                Establecer recordatorios automáticos para cambios y
                mantenimientos según las recomendaciones del fabricante.
              </li>
            </ul>
          </ul>
          <li>Políticas:</li>
          <ul>
            <li>
              Políticas internas relacionadas con la selección de productos:
            </li>
            <ul>
              <li>
                Crear políticas claras que respalden la adopción de productos
                innovadores.
              </li>
              <li>
                Simplificar el proceso de aprobación para la introducción de
                nuevos productos.
              </li>
            </ul>
            <li>Cumplimiento de regulaciones y estándares:</li>
            <ul>
              <li>
                Capacitar al personal sobre las regulaciones y estándares
                relacionados con el uso de aceites sintéticos.
              </li>
              <li>
                Implementar un sistema de monitoreo para garantizar el
                cumplimiento.
              </li>
            </ul>
          </ul>
        </ol>
        <h2 className="tools__subtitle">
          Tercera herramienta: Modelo de las Cinco Fuerzas de Porter
        </h2>
        <img className="tools__image" src={porter} alt="Modelo porter" />
        <h3 className="tools__subtitle-h3">Plan de Acción:</h3>
        <p>
          Distri Lubricantes Kar, inmersa en un mercado altamente competitivo,
          debe fortalecer su posición ante la amenaza de nuevos competidores
          mediante mejoras continuas. La diversificación de proveedores y la
          implementación de programas de fidelización contrarrestarán el poder
          de negociación. Para enfrentar competidores y productos sustitutos, la
          empresa debe diferenciarse mediante investigación y desarrollo,
          considerando incluso la inclusión de lubricantes sintéticos en su
          oferta. La estrategia general implica la diferenciación, gestión de
          proveedores, fidelización de clientes y exploración de nuevos
          productos, junto con posibles alianzas para destacar en el mercado y
          asegurar su posición.
        </p>
      </section>
    </main>
  );
}
