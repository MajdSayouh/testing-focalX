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
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Learn from "./Components/Learn/Learn";
import Descover from "./Components/Descover/Descover";
import What from "./Components/What/What";
import Training from "./Components/Training/Training";

function App() {

  return (
    <div>
       <Nav />
      <Hero />
      <Learn />
      <Descover />
      <What />
      <Training />
      <Promotion />
      <OurStudent />
      <RealCreators/>
      <NotFind/>
      <FAQ/>
      <Footer/>
      



    </div>
  )

}

export default App;
