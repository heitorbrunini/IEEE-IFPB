import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Eventos from "./Components/Paginas/Eventos";
import Ramo from "./Components/Paginas/Ramo";
import SociedadeComp from "./Components/Paginas/SociedadeComp"; 
import RAS from "./Components/Paginas/RAS"; 
import APS from "./Components/Paginas/APS"; 
import SSCS from "./Components/Paginas/SSCS";

function App() {
  return ( 
    <> 
      <BrowserRouter> 
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/eventos" element={<Eventos/>}/> 
            <Route path="/ramo" element={<Ramo/>}/> 
            <Route path="/socieadadeComp" element={<SociedadeComp/>}/> 
            <Route path="/ras" element={<RAS/>}/> 
            <Route path="/aps" element={<APS/>}/> 
            <Route path="/sscs" element={<SSCS/>}/>
        </Routes>
      </BrowserRouter>  

    </>
  );
}

export default App;
