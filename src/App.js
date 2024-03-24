import Dictionary from "./components/Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <p className="m-0 credit">Coded by <a href="https://github.com/swarnimk-10" target="_blank">Swarnim Kumari</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
