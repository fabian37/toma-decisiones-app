import "./Footer.css";

export function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div>Derechos reservados DeciLab - {date.getFullYear()}</div>
    </footer>
  );
}
