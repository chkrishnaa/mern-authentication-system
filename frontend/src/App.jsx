import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from "./pages/Home";
import { Login } from './Auth/Login'
import { SignUp } from './Auth/SignUp'
import VerifyEmail from './Auth/VerifyEmail'
import ResetPassword from './Auth/ResetPassword'
import { AppContextProvider } from './context/AppContext'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <ToastContainer/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login key="login" />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp key="signup" />} />
      </Routes>
    </AnimatePresence>
    
  )
}

function App() {
  return (
    <BrowserRouter>
    <AppContextProvider>
      <AnimatedRoutes />
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
