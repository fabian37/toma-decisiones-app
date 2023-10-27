import "./Tools.css";

export function Tools() {
  return (
    <main className="app-container">
      <section className="tools">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
        <h1>Próximamente...</h1>
        <p>
          Estamos trabajando arduamente para traerte algo increíble. En breve,
          estaremos lanzando nuevas productos que te encantarán. Mantente atento
          para conocer todas las emocionantes actualizaciones que tenemos
          reservadas para ti.
        </p>
      </section>
    </main>
  );
}
