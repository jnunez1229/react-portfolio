import React from 'react'

const Footer = () => {
    return(
        <footer id="contact-me">
        <div>
            <div className="contacts">
                <a href="mailto:thatjuanguy89@gmail.com" target='_blank'><i className="fas fa-envelope fa-2x"></i></a>
                <a href="https://www.github.com/jnunez1229" target='_blank'><i className="fab fa-github-square fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/juan-nu%C3%B1ez-7625b9111/" target='_blank'><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://www.facebook.com/thatjuanguy/" target='_blank'><i className="fab fa-facebook-square fa-2x"></i></a>
            </div>
        </div>

        <h3>&copy; 2021 Juan Nuñez</h3>
    </footer>
    )
}

export default Footer;