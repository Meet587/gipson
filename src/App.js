import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./component/Navbar/NavigationBar";
import Home from "./page/Home/Home";
import "./assets/style/globle.scss";
import { Route, Router, Routes } from "react-router";
import AboutUs from "./page/About/AboutUs";
import Products from "./page/Products/Products.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Products />} path="/products" />
          {/* <Route element={<Home />} path="/" /> */}
        </Routes>
        {/* <Home /> */}
      </main>
    </div>
  );
}

export default App;
