import React from 'react'
import Project from '../Project'




const Portfolio = () => {
    
    return(
        <section id='work'>
        <div  className="container mt-3">
          <h2 data-testid='h2contact'>Portfolio</h2>
          <div className='grid-container'>
          <Project />
          </div>
        </div>
      </section>
        
    )
}

export default Portfolio