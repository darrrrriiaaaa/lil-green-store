// import libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import css
import './styles/App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

// import context
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// import pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Assortment from './pages/Assortment';
import About from './pages/About';
import Order from './pages/Order';
import SearchResults from './pages/SearchResults';
import Product from './pages/Product';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/assortment-all' element={<Assortment />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/order' element={<Order />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/assortment-all/:productId' element={<Product />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
