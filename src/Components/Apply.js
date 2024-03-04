import "./Apply.css";
import ifpb from "../Assets/oramo.jpg";

function Apply() {

    return (


        <div class="card text-bg-dark" id="card-content">

            <div class="container">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={ifpb} class="img-fluid ifpb" alt=""></img>
                        </div>
                        <div class="col-md-6">
                            <div class="card bg-transparent" id="card-apply" >
                                <div class="card-body">
                                    
                                    <h6 class="my-text card-subtitle mb-2 text-body-secondary">Ramo Estudantil IFPB CG</h6>
                                    <p class="my-text card-text">
                                        Junte-se ao Ramo Estudantil IFPB da IEEE e cresça pessoal e profissionalmente enquanto faz amigos e deixa sua marca no IFPB. Não espere mais para se juntar a nós!</p>
                                    <button type="button" class="containerbutton">Juntar-se</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );

}

export default Apply;