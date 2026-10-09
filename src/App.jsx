import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="mx-auto  ">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default App;
