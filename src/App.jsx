import { useState } from 'react'
import './App.css'

import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom/dist';
import { Route } from 'react-router-dom/dist';
import { Routes } from 'react-router-dom/dist';


import Nav from "./Components/Nav/Nav";

import HomePage from './Components/HomePage/HomePage';
import CoursesPage from './Components/CoursesPage/CoursesPage';
import ArticlePage from './Components/ArticlePage/ArticlePage';

import Hero from "./Components/Hero/Hero";
import Learn from "./Components/Learn/Learn";
import Descover from "./Components/Descover/Descover";
import What from "./Components/What/What";
import Training from "./Components/Training/Training";

function App() {

  return (

    
    <div>
       <Nav />
       <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/courses' element={<CoursesPage/>}></Route>
        <Route path='/article' element={<ArticlePage/>}></Route>


       </Routes>

   
      
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
