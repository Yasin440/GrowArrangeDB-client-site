import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Dashboard from './components/Dashboard/Dashboard';
// import NewOrder from './components/Dashboard/NewOrder/NewOrder';
import AddServices from './components/Dashboard/AddServices/AddServices';
import AllServices from './components/Dashboard/AllServices/AllServices';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Tickets from './components/Dashboard/Tickets/Tickets';
import ManageOrder from './components/Dashboard/ManageOrder/ManageOrder';
import NewOrderHome from './components/Home/NewOrderHome/NewOrderHome';
import EditOrder from './components/Dashboard/ManageOrder/EditOrder';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/addServices" element={<AddServices />} />
            <Route path="/dashboard/manageOrder" element={<ManageOrder />} />
            <Route path="/dashboard/manageOrder/edit/:id" element={<EditOrder />} />
            <Route path="/dashboard/manageOrder/edit" element={<EditOrder />} />
            <Route path="/dashboard/newOrder/:id" element={<NewOrderHome />} />
            {/* <Route path="/dashboard/newOrder/" element={<NewOrder />} /> */}
            <Route path="/dashboard/allServices" element={<AllServices />} />
            <Route path="/dashboard" element={<AllServices />} />
            <Route path="/dashboard/myOrders" element={<MyOrders />} />
            <Route path="/dashboard/tickets" element={<Tickets />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;