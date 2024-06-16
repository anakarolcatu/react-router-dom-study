import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from './paginas/SobreMim';
import Inicio from './paginas/inicio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
