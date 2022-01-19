import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;