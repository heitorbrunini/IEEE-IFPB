import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Local from './Components/Local';
import Dados from './Components/Dados'
import Sociedades from './Components/Sociedades';
import Afiliados from './Components/Afiliados';
import Apply from './Components/Apply'

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
    </div>
  );
}

export default App;
