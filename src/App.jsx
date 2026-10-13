import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sobre from "./Sobre/Sobre";
import Contato from "./Contato/Contato";

const App = () => {
  return (
    <div className="mx-auto  ">
      <BrowserRouter basename="/agency-landing-page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Routes>
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
