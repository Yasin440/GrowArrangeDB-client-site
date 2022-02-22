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
import AddServices from './components/Dashboard/AddServices/AddServices';
import AllServices from './components/Dashboard/AllServices/AllServices';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Tickets from './components/Dashboard/Tickets/Tickets';
import ManageOrder from './components/Dashboard/ManageOrder/ManageOrder';
import NewOrderHome from './components/Home/NewOrderHome/NewOrderHome';
import EditOrder from './components/Dashboard/ManageOrder/EditOrder';
import PrivateRoute from './components/Register/PrivateRoute';
import PrivateAdminRoute from './components/Register/PrivateAdminRoute';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import AddBalance from './components/Dashboard/AddBalance/AddBalance';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position='top-center' autoClose={2500} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard" element={<AllServices />} />
            <Route path="/dashboard/allServices" element={<AllServices />} />
            <Route path="/dashboard/myOrders" element={<MyOrders />} />
            <Route path="/dashboard/addBalance" element={<AddBalance />} />
            <Route path="/dashboard/tickets" element={<Tickets />} />
            <Route
              path="/dashboard/addServices"
              element={<PrivateAdminRoute><AddServices /></PrivateAdminRoute>}>
            </Route>
            <Route
              path="/dashboard/manageOrder"
              element={<PrivateAdminRoute><ManageOrder /></PrivateAdminRoute>}>
            </Route>
            <Route
              path="/dashboard/manageOrder/edit/:id"
              element={<PrivateAdminRoute><EditOrder /></PrivateAdminRoute>}>
            </Route>
            <Route
              path="/dashboard/manageOrder/edit"
              element={<PrivateAdminRoute><EditOrder /></PrivateAdminRoute>}>
            </Route>
            <Route path="/dashboard/newOrder/:id"
              element={<PrivateRoute><NewOrderHome /></PrivateRoute>}>
            </Route>
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
        <MessengerCustomerChat
          pageId="111345553866625"
          appId="271659555053536"
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;