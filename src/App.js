import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Click from "./component/Click.js";
import Header from "./component/Header.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Click />
    </div>
  );
}

export default App;
