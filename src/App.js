import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEquipment from './component/AddEquipment/AddEquipment';
import AllEquipment from './component/AllEquipment/AllEquipment';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import About from './component/Pages/About/About';
import Details from './component/Pages/Details/Details';
import LogIn from './component/Pages/LogIn/LogIn';
import PlaceOrder from './component/Pages/PlaceOrder/PlaceOrder';
import ServicesPage from './component/Pages/ServicesPage/ServicesPage';
import SignUp from './component/Pages/SignUp/SignUp';
import Update from './component/Pages/Update/Update';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ResetPassword from './component/ResetPassword/ResetPassword';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<ServicesPage></ServicesPage>}></Route>
        <Route path='/order' element={
          <RequireAuth>
            <PlaceOrder></PlaceOrder>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='/addEquipment' element={<AddEquipment></AddEquipment>}></Route>
        <Route path='/allEquipment' element={<AllEquipment></AllEquipment>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
