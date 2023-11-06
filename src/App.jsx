import { useState } from 'react'
import './App.css'

import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom/dist';
import { Route } from 'react-router-dom/dist';
import { Routes } from 'react-router-dom/dist';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";

import HomePage from './Components/HomePage/HomePage';
import CoursesPage from './Components/CoursesPage/CoursesPage';
import ArticlePage from './Components/ArticlePage/ArticlePage';

function App() {

  return (

    
    <div>
       <Nav />
       <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/courses' element={<CoursesPage/>}></Route>
        <Route path='/article' element={<ArticlePage/>}></Route>


       </Routes>

   
      
      <Footer/>


      



    </div>
  )

}

export default App;
