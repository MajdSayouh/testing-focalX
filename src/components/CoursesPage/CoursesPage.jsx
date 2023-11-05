import React from 'react'
import Teachers from '../Teachers/Teachers';
import TrainingProgram from '../TraininProgram/TrainingProgram';
import Price from '../Price/Price';
import ProjectStudent from '../ProjectStudent/ProjectStudent';



function CoursesPage() {
  return (
    <div>
      <ProjectStudent />
      <TrainingProgram />
      <Teachers />
      <Price />


    </div>
  )
}

export default CoursesPage