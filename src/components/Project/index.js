import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const Project = ({ project }) => {

    const [projects] = useState([
        {
            name: 'Eat Out Austin',
            description: 'HTML/CSS/NodeJS/Sequelize/Bootstrap/MySQL2',
            page: 'https://eat-out-austin.herokuapp.com/',
            github: 'https://github.com/DragoonKite/eat-out-austin'
            
        },
        {
            name: 'Safe Travels',
            description: 'HTML/BULMA/JS',
            page: 'https://cocobeware83.github.io/Safe-Travels/',
            github: 'https://github.com/cocobeware83/Safe-Travels'
            
        },
        {
            name: 'Tech Blog',
            description: 'HTML/CSS/NodeJS/ExpressJS/MySQL2/Bcrypt/Sequelize',
            page: 'https://eat-out-austin.herokuapp.com/',
            github: 'https://protected-caverns-20085.herokuapp.com/'
            
        },
        {
            name: 'Day Scheduler',
            description: 'HTML/CSS/JS/jQuery/MomentJS',
            page: 'https://jnunez1229.github.io/day-scheduler/',
            github: 'https://github.com/jnunez1229/day-scheduler'
            
        },
        {
            name: 'Weather Dashboard',
            description: 'HTML/CSS/Bootstrap/JS',
            page: 'https://jnunez1229.github.io/weather-dashboard/',
            github: 'https://github.com/jnunez1229/weather-dashboard'
            
        },
        {
            name: 'Coding Quiz',
            description: 'HTML/CSS/JS',
            page: 'https://jnunez1229.github.io/coding-quiz/',
            github: 'https://github.com/jnunez1229/coding-quiz'
            
        }
    ]);

    const [currentProject, setCurrentProject] = useState();
    
    return (
            <Row>
                {projects.map((project, i) => (
                    <Col lg={6} className='mb-2'  key={project.name}>
                                    <div class={`grid-item work-${i + 1}`}>
                            
                            <div class="label">
                                <h3>{project.name}</h3>
                                <h4>{project.description}</h4>
                                <div class="links">
                                    <a href={project.page} target='_blank' >Deployed Site</a> | <a href={project.github} target='_blank'>Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </Col>

                 ))}
            </Row>
            
        

    )
}

export default Project