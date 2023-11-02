import { useState } from 'react'
import './App.css'
import OurStudent from './components/OurStudent/OurStudent';
import Promotion from './components/Promotion/Promotion';
import RealCreators from './components/RealCreators/RealCreators';
import NotFind from './components/NotFind/NotFind';
import FAQ from './components/FAQ/FAQ';



function App() {

  return (
    <div>
      <Promotion />
      <OurStudent />
      <RealCreators/>
      <NotFind/>



    </div>
  )
}

export default App
