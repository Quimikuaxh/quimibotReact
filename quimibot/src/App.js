import './App.css';
import { SquareInfo } from './components/SquareInfo';

function App() {
  return (
    <div className="App">
        <div className='main-container'>
            <h1>
                Esta es la lista de Pokémon
            </h1>
            <SquareInfo />
        </div>
    </div>
  );
}

export default App;
