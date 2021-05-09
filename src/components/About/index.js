import React from 'react'


const About = () => {
    return(
        <section>
        <div  className="container mt-3">
          <h2 data-testid='h2contact' >About Me</h2>
          <div className="bio row d-flex justify-content-between mb-5">
            <div className="col-lg-4 d-flex justify-content-center">
                <img 
                  className="img-fluid" 
                  src={require('../../assets/Circle-Profile.png')} 
                  alt="Juan's profile picture"
                />
            </div>
            <div className="col-lg-8 ">
                <p >
                Hello!
                <br></br>
                Passionate Software Developer with a background in Music Education. Currently teaching in Denton as a Band Director, but I'm in the process of obtaining a certification for full stack development from the University of Texas at Austin Coding Bootcamp.
                </p>
                <p>
                As a teacher, I have found that the best way to reach a student was by having a well organized lesson plan that clearly explained a concept. Students were able to grasp concepts more easily if I found a way to allow students to connect concepts to their current experiences in life.
                </p>

                <p>
                I enjoy creating fully applications and responsive that are effective in doing the same thing. By using a clear design that is simple and easy to follow, I can help clients successfully convey their message to prospective visitors on their phone or computer screen! 
                </p>
               
            </div>         
        </div>
        </div>
      </section>
    )
}

export default About