import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />{" "}
        <span className="title">Dictionary</span>
      </header>
      <main>
        <Dictionary />
      </main>
      <p>Coded by Nicole Jones</p>
    </div>
  );
}

export default App;
