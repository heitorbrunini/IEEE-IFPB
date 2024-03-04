import React from "react"; 
import Navbar from "../NavBar";  
import ContentAps from "../ContentAPS" 
import ProjetosAps from "../ProjetosAps";
import Afiliados from "../Afiliados";
import Contatar from "../Contatar";
import Footer from "../footer";

export default function APS(){ 
    return( 
        <div className="app"> 
            <Navbar/> 
            <ContentAps/>
            <ProjetosAps/>
            <Afiliados/> 
            <Contatar/> 
            <Footer/>
        </div> 
    )
}