import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Services from './components/Services/Services';
import Dashboard from './components/Dashboard/Dashboard';
import NewOrder from './components/Dashboard/NewOrder/NewOrder';
import AddServices from './components/Dashboard/AddServices/AddServices';
import AllServices from './components/Dashboard/AllServices/AllServices';
import Orders from './components/Dashboard/Orders/Orders';
import Tickets from './components/Dashboard/Tickets/Tickets';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/addServices" element={<AddServices />} />
            <Route path="/dashboard/newOrder" element={<NewOrder />} />
            <Route path="/dashboard/allServices" element={<AllServices />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/dashboard/tickets" element={<Tickets />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;