import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./component/Navbar/NavigationBar";
import Home from "./page/Home/Home";
import "./assets/style/globle.scss";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
