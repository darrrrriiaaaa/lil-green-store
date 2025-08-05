// import libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import css
import './styles/App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import context
import { CartProvider } from './context/CartContext';

// import pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Assortment from './pages/Assortment';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/assortment-all' element={<Assortment />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>
  );
}

export default App;
