import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Titulo from './Titulo';
import Menu from './Menu';
import Banner from './Banner';
import Rodape from './Rodape';
import CalcDollar from './CalcDollar';
import CalcCentimetro from './CalcCentimetro';
import CalcMetro from './CalcMetro';

function App() {

  return (
    <>
      <div className="container">
        <Titulo />
        <Menu />
        <Banner />
        <CalcDollar />
        <CalcMetro />
        <CalcCentimetro />
      </div>
      <Rodape />
    </>
  )
}

export default App
