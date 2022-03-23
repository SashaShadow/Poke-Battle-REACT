import Home from "./components/Home.js";
import BattleStructure from "./components/BattleStructure.js";
import { PokeContext } from "./context/PokeContext.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <PokeContext>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/battle" element={<BattleStructure/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
      </PokeContext>
    </BrowserRouter>
  );
}

export default App;
