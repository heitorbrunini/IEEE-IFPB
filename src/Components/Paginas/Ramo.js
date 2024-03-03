import React from "react"; 
import Navbar from "../NavBar";
import Textoramo1 from "../Textoramo1";
import Textoramo2 from "../Textoramo2";
import Textoramo3 from "../Textoramo3";
import Footer  from "../footer"

export default function Ramo(){ 
    return( 
        <div className="App"> 
            <Navbar/> 
            <Textoramo1/>
            <Textoramo2/>
            <Textoramo3/>
            <Footer/>
        </div>
    )
}