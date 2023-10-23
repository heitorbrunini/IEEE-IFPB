import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Local from './Components/Local';
import Dados from './Components/Dados'
import Sociedades from './Components/Sociedades';
import Afiliados from './Components/Afiliados';
import Apply from './Components/Apply'
import Contatar from './Components/Contatar';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Local/>
     <Sociedades/>
     <Dados/>
     <Afiliados/>
     <Apply/>
     <Contatar/>
     <Footer/>
    </div>
  );
}

export default App;
