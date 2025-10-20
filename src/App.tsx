import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.minimundi.com.br/cdn/imagens/produtos/det/miniatura-carro-batmovel-classic-tv-series-com-figuras-batman-e-robin-com-luzes-hollywood-rides-1-18-dc-jada-toys-98625_a.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
