import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.component';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Navbar from './components/nav.component';
import Alogin from './components/admin_login.component';
import Admin from './components/admin_page.component';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
   
   <Router>
     
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/" element={<Login />}></Route>         
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/adminlogin" element={<Alogin />}></Route>
          <Route path="/adminpage" element={<Admin />}></Route>
        </Routes>
        
    </Router>
  );
};

export default App;
