import React from 'react'
import profile from '../../assets/images/Circle-Profile.png'
import {Row, Col} from 'react-bootstrap'


const About = () => {
    return(
        <section>
        <div  className="container mt-3">
          <h2 className='title'>About Me</h2>

          <div className="bio row d-flex justify-content-between mb-5">
          <Row>
            <Col md={6}>
              <img
                        id='profile-img'
                        className="img-fluid" 
                        src={profile}
                        alt="Juan's profile picture"
                        style={{
                          height: 200,
                          minWidth: 200
                        }}
                >

              </img>
            </Col>
            <Col md={6}
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              borderRadius: 5
            }}>
            <p>
                  Hello!
                </p>
                <p >
                I am a passionate Software Developer with a background in Music Education. While I am currently teaching in the DFW metroplex as a Band Director, I'm also in the process of obtaining a certification for full-stack development from the University of Texas at Austin Coding Boot Camp.
                </p>
                <p>
                As a teacher, I have found that the best way to reach a student was by having a well organized lesson plan that clearly explained a concept. Students were able to grasp concepts more easily if I found a way to allow students to connect concepts to their current experiences in life.
                </p>

                <p>
                I enjoy creating fully applications and responsive that are effective in doing the same thing. By using a clear design that is simple and easy to follow, I can help clients successfully convey their message to prospective visitors on their phone or computer screen! 
                </p>
            </Col>
          </Row>



            </div>
            <div className="col-lg-8 ">

               
            </div>         
        </div>
      </section>
    )
}

export default About