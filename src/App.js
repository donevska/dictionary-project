import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <img
          className="HeaderImage"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/026/921/original/Data-Dictionary-vs-Business-Glossary-Landing-Page-1710x495-1.png?1644449969"
          alt="banner"
        ></img>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/angela-donevska"
              target="_blank"
              rel="noreferrer"
            >
              Angela Donevska
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/donevska/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
