import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/Profile';
import URLShortener from './Pages/URLShortener';
import MyURLsPage from './Pages/MyURLsPage';



function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/url/shortener' element={<URLShortener/>} />
            <Route path="/url/history" element={<MyURLsPage />} />
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
  )
}

export default App
