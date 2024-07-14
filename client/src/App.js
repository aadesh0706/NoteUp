import { Route, Routes } from 'react-router-dom';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import Home from './Componets/Home';
import './style.css';

function App() {
  return (
    <div className="App">
        <div className='leftside'>
          <Header/>
        </div>
        <div className='home'>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
          </Routes>

        </div>
        <div className='rightside'>
          <Footer/>
        </div>
        
    </div>
  );
}

export default App;
