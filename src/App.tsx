import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Company } from "./pages/Company";
import { Tools } from "./pages/Tools";
import { Bibliography } from "./pages/Bibliography";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/bibliografia" element={<Bibliography />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
