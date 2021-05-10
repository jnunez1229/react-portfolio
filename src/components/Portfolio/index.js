import React from 'react'
import Project from '../Project'




const Portfolio = () => {
    
    return(
        <section id='work'>
        <div  className="container mt-3">
          <h2 id='title' >Portfolio</h2>
          <div className='grid-container'>
          <Project />
          </div>
        </div>
      </section>
        
    )
}

export default Portfolio