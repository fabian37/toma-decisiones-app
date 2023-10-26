export function Footer() {
  const date = new Date();
  return (
    <footer>
      <div>Derechos reservados DeciLab - {date.getFullYear()}</div>
    </footer>
  );
}
