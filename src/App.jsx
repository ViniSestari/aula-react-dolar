import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NoPage from './pages/NoPage';
import Centimetros from './pages/Centimetros';
import Metros from './pages/Metros';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='centimetros' element={<Centimetros />} />
          <Route path='metros' element={<Metros />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
