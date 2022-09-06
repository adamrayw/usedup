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
import CategoryPage from './pages/CategoryPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPages from './pages/form-jual/SuccessPages';
import PrivateRoutes from './utils/PrivateRoutes';
import FormJual from './pages/FormJual';
import FavoritePage from './pages/FavoritePage'
import EditProfile from './pages/EditProfile';
import SuccessVerif from './pages/SuccessVerif';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/jual/:slug' element={<FormJual />} />
          <Route path='/success' element={<SuccessPages />} />
          <Route path='/favorit-saya' element={<FavoritePage />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/verification/:id' element={<SuccessVerif />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jual/pilih-kategori' element={<PilihKategori />} />
        <Route path='/view/:id' element={<DetailItem />} />
        <Route path='/:slug' element={<CategoryPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token/:id' element={<ResetPassword />} />
      </Routes>

      <ToastContainer />
      <FooterComponent />
    </div>
  );
}

export default App;
