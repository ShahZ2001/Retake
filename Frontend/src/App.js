import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import DonationPage from './pages/Donation';
import Basket from './pages/Basket';
import HomePage from './pages/Home';
import ContactUs from './pages/ContactUs';
import EducationResource from './pages/EducationResource';
import HungerMap from './pages/HungerMap';
import Registration from './pages/Registration';
import Bundlesdetails from './pages/Bundlesdetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/Donation" element={<DonationPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/EducationResource" element={<EducationResource />} />
      <Route path="/HungerMap" element={<HungerMap />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/bundles" element={<Bundlesdetails/>}/>
    </Routes>
  );
}
