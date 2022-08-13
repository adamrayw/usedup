import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import FooterComponent from './components/FooterComponent';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PageNotFound from './pages/PageNotFound';
import DetailItem from './pages/DetailItem';
import PilihKategori from './pages/PilihKategori';
import FormMobilBekas from './pages/form-jual/FormMobilBekas';
import FormMotorBekas from './pages/form-jual/FormMotorBekas';
import FormProperty from './pages/form-jual/FormProperty';
import FormElektronik from './pages/form-jual/FormElektronik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dijual-hyundai-stargazer-baru' element={<DetailItem />} />
        <Route path='/jual/pilih-kategori' element={<PilihKategori />} />
        <Route path='/jual/mobil-bekas' element={<FormMobilBekas />} />
        <Route path='/jual/motor-bekas' element={<FormMotorBekas />} />
        <Route path='/jual/property' element={<FormProperty />} />
        <Route path='/jual/elektronik-gadget' element={<FormElektronik />} />
      </Routes>
      <ToastContainer />
      <FooterComponent />
    </div>
  );
}

export default App;
