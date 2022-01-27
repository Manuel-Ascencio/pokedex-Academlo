import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Acces from "./components/Access";
import Pokedex from "./components/Pokedex";
import ProtectedRoutes from './components/ProtectedRoutes';
import PokemonInfo from './components/PokemonInfo';


function App() {


  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<Acces />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="/pokedex/:id" element={<PokemonInfo />} />
                </Route>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
