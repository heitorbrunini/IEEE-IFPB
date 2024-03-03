import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Local from './Components/Local';
import Dados from './Components/Dados'
import Sociedades from './Components/Sociedades';
import Afiliados from './Components/Afiliados';
import Apply from './Components/Apply'
import Contatar from './Components/Contatar';
import Footer from './Components/footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Ramo from "./Components/Paginas/Ramo";
import SociedadeComp from "./Components/Paginas/SociedadeComp";
import WIE from './Components/Paginas/WIE';
import Comsoc from './Components/Paginas/Comsoc';
import APS from "./Components/Paginas/APS";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ramo" element={<Ramo />} />
          <Route path="/socieadadeComp" element={<SociedadeComp />} />
          <Route path="/wie" element={<WIE/>} />
          <Route path="/comsoc" element={<Comsoc />} />
          <Route path="/aps" element={<APS />} />
          
        </Routes>

      </BrowserRouter>
      

    </>

  );
}

export default App;
