import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
