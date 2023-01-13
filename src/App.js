import './App.css';
import MainCard from './components/MainCard/MainCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import enlatado from './data/enlatado.json';


function App() {
  return (
    <div className="App">
      <MainCard enlatado={enlatado} />
    </div>
  );
}

export default App;
