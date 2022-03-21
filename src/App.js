import Home from "./components/Home.js";
import { PokeContext } from "./pokemock.js";
import './App.css';

function App() {
  return (
    <PokeContext>
    <div className="App">
      <Home/>
    </div>
    </PokeContext>
  );
}

export default App;
