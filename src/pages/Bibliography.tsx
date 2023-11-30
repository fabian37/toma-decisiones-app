import "./Bibliography.css";

export function Bibliography() {
  return (
    <main className="app-container">
      <section>
        <h1>Bibliografía</h1>
        <div className="fuente">
          <span className="fuente__autor">Mordor Intelligence. (s. f.).</span>
          <span className="fuente__titulo">
            {" "}
            Mercado de lubricantes automotrices de colombia análisis de tamaño y
            participación tendencias de crecimiento y pronósticos hasta 2026.
          </span>
          <span className="fuente__referencia">
            {" "}
            https://www.mordorintelligence.com/es/industry-reports/colombia-automotive-lubricants-market
          </span>
        </div>
        <div className="fuente">
          <span className="fuente__autor">Correa, J. (2006).</span>
          <span className="fuente__titulo">
            {" "}
            El Método DOFA. Trabajo de la especialización en alta gerencia.
            Universidad de los Andes de Colombia.
          </span>
        </div>
        <div className="fuente">
          <span className="fuente__autor">Valenzuela, L. (2000).</span>
          <span className="fuente__titulo"> Diagrama de ishikawa.</span>
          <span className="fuente__referencia">
            {" "}
            Santiago de Chile, Chile: UNAB.
          </span>
        </div>
        <div className="fuente">
          <span className="fuente__autor">
            Michaux, S., & Cadiat, A. C. (2016).
          </span>
          <span className="fuente__titulo">
            {" "}
            Las cinco fuerzas de Porter: Cómo distanciarse de la competencia con
            éxito.
          </span>
          <span className="fuente__referencia"> 50Minutos. es.</span>
        </div>
      </section>
    </main>
  );
}
