import { HashRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import './css/index.css';
import './css/cardsText.css'
import './css/gener.css'
import './css/input.css'
import './css/pokedex.css'

import Index from './components/Index';
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes';
import InputName from './components/InputName';
import PokemonItem from './components/PokemonItem';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/login' element={<InputName />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonItem />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
