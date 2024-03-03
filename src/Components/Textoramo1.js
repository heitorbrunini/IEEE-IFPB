import React from "react";
import estudantes from "../Assets/estudantes.jpg"
import "./Textoramo1.css";

function Textoramo1() {

  return(
    <>
    <div className="conteudo1">
      <div className="containeramo1">
          <h1 className="title1">Ramo Estudantil</h1>
          <hr></hr>
          <h3 className="subtitle">O Início do Ramo IEEE no IFPB Campus Campina Grande!</h3>
            <p>
                O Ramo IEEE do IFPB Campus Campina Grande, inaugurado em 30 de abril de 2013, teve sua fundação sob a liderança dos alunos Ítalo de Pontes, Bárbara Meira, Nathália Batista e Lucas Araújo. A emocionante posse da diretoria ocorreu em 09 de maio, no inspirador auditório do Campus Campina, com a presença de diversos alunos e autoridades que prestigiaram o evento.
            </p>
            <div className="imagem-responsiva">
                      <h5>Grupo fundador do Ramo Estudantil</h5>
                      <img src={estudantes} alt="Estudantes" />
            </div>
      </div>
    </div>
     </>

  )



  }

export default Textoramo1;