import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import FooterComponent from './components/FooterComponent';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PageNotFound from './pages/PageNotFound';
import DetailItem from './pages/DetailItem';

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
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
