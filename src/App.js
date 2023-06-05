import "./App.css";
import ModelList from "./components/ModelList/ModelList";
import Header from "./components/Header/Header";
import models from "./data/models.json";

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Model Reference Guide</h1>
      <ModelList data={models} />
    </div>
  );
}

export default App;
