import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Titulo from './Titulo';
import Menu from './Menu';
import Banner from './Banner';
import Rodape from './Rodape';
import CalcDollar from './CalcDollar';

function App() {

  return (
    <>
      <div className="container">
        <Titulo />
        <Menu />
        <Banner />
        <CalcDollar />
      </div>
      <Rodape />
    </>
  )
}

export default App
