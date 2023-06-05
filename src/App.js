import './App.css';
import ModelList from './components/ModelList/ModelList';
import models from './data/models.json'

function App() {
  return (
    <div className="App">
      <h1>Model Reference Guide</h1>
      <ModelList/>
    </div>
  );
}

export default App;
