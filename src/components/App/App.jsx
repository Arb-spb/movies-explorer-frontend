import './App.css';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
