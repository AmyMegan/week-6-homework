import logo from "./logo.png";
import './App.css';
import Dictonary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div className="bootstrap-container">
      <div className="App-header">
    <img src={logo} className="App-logo img-fluid" alt="logo"></img>
    </div>
    </div>
    <main>
      <Dictonary />
    </main>
    <small> 
    <footer className="App-footer"> Coded by Amy Megan.</footer>
    </small>
    </div>
  );
}
