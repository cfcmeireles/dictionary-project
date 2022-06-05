import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/cmeireles1/dictionary-project"
            target="_blank"
          >
            Open-source code
          </a>
          {""} by Carina Meireles
        </footer>
      </div>
    </div>
  );
}
