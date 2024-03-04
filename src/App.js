import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Ramo from "./Components/Paginas/Ramo";
import APS from "./Components/Paginas/APS";
import WIE from './Components/Paginas/WIE';
import Comsoc from './Components/Paginas/Comsoc';
import Blog from "./Components/Paginas/Blog"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ramo" element={<Ramo />} />
          <Route path="/wie" element={<WIE />} />
          <Route path="/comsoc" element={<Comsoc />} />
          <Route path="/aps" element={<APS />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
