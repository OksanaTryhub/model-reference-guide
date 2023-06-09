import ModelList from "./components/ModelList/ModelList";
import Header from "./components/Header/Header";
import models from "./data/models.json";

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <h1 className={styles.title}>Пам’ятка на прямі фасади</h1>
      <ModelList data={models} />
    </div>
  );
}

export default App;
