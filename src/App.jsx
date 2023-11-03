import { useState } from 'react'
import './App.css'
import OurStudent from './components/OurStudent/OurStudent';
import Promotion from './components/Promotion/Promotion';
import RealCreators from './components/RealCreators/RealCreators';
import NotFind from './components/NotFind/NotFind';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom/dist';
import { Route } from 'react-router-dom/dist';
import { Routes } from 'react-router-dom/dist';


function App() {

  return (
    <div>
      <Promotion />
      <OurStudent />
      <RealCreators/>
      <NotFind/>
      <FAQ/>
      <Footer/>
      



    </div>
  )
}

export default App
