import { event } from 'jquery'
import React from 'react'
import {Row, Col} from 'react-bootstrap'
import resume from '../../assets/JNunezResume.pdf'



const Resume = () => {
  
  const noReload = () =>{
    event.preventDefault()
  }

    return(
        <section className='mb-5'>
        <div  className="container mt-3 mb-5">
          <h2 className='title'> Resume</h2>
          <a className='resume' href={resume} onClick={noReload} target='_blank' rel='noreferrer'>Download Resume</a>

          <Row>
            <Col md={6} style={{              
              backgroundColor: 'rgba(0,0,0,.2)',
              borderRadius: 5,
              paddingLeft:'50px'
            }}>
              <h4 className='title'style={{color: 'white'}}>Front-End Proficiencies</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>React Native</li>
                <li>Handlebars</li>
                <li>Responisve Designs</li>
              </ul>
            </Col>
            <Col lg={6} style={{              
              backgroundColor: 'rgba(0,0,0,.2)',
              borderRadius: 5,
              paddingLeft:'50px'
            }}>
            <h4 className='title' style={{color: 'white'}}>Back-End Proficiencies</h4>
            <ul>
              <li>Custom API's</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>MySQL</li>
              <li>Sequelite</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>REST</li>
            </ul>
        
            </Col>
          </Row>
          </div> 
      </section>
    )
}

export default Resume