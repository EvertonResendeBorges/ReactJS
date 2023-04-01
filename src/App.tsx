import './App.css';

import Soma from './components/Soma';
import TrocaTexto from './TrocaTexto';

function App() {
  return(
    <>
      <p>{Soma(2,2)}</p>
      <p>{Soma(2.5, 2.5)}</p>
      <TrocaTexto/>
    </>
  )
}

export default App;
