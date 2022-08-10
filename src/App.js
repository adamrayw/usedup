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
import FormMobilBekas from './pages/FormMobilBekas';

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
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
