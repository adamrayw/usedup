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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPages from './pages/form-jual/SuccessPages';
import PrivateRoutes from './utils/PrivateRoutes';
import Maintenance from './utils/MaintanceMode';
import FormJual from './pages/FormJual';
import FavoritePage from './pages/FavoritePage'
import EditProfile from './pages/EditProfile';
import SuccessVerif from './pages/SuccessVerif';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import IklanSaya from './pages/IklanSaya';
import UnderContruct from './pages/UnderContruct';
import SearchResult from './pages/SearchResult';
import Profile from './pages/Profile';
import RoomChat from './pages/RoomChat';
import { useEffect } from 'react';
import socket from './utils/socket';
import { MdNotifications } from 'react-icons/md';

function App() {

  const userId = JSON.parse(localStorage.getItem('user')) ?? null

  useEffect(() => {
    console.log('connected')
    socket.emit("notification", (data) => {
      if (data !== null ? data.chatTo.id === userId.id : '') {
        toast('Ada pesan baru! dari app.js', {
          icon: <MdNotifications className='text-blue-500' />,
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })
      }
    })
  }, [socket])

  return (
    <div className="App flex flex-col justify-between min-h-screen">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/success' element={<SuccessPages />} />
          <Route path='/favorit-saya' element={<FavoritePage />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/verification/:id' element={<SuccessVerif />} />
          <Route path='/jual/:slug' element={<FormJual />} />
        </Route>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/' element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/view/:id' element={<DetailItem />} />
        <Route path='/category/:slug' element={<CategoryPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token/:id' element={<ResetPassword />} />
        <Route path='/iklan-saya' element={<IklanSaya />} />
        <Route path='/search/:keyword' element={<SearchResult />} />
        <Route path='/chats' element={<RoomChat />} />
        <Route path='/maintenance' element={<UnderContruct />} />
        {/* Maintenance Route */}
        <Route path='/jual/pilih-kategori' element={<PilihKategori />} />
        <Route element={<Maintenance />} >
        </Route>
      </Routes>

      <ToastContainer />
      <FooterComponent />
    </div>
  );
}

export default App;
