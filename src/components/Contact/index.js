import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers'

function Contact(){

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){

        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
            }
        }

        if(e.target.name === 'message'){
              if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
        }
      

        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }      
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
      <section>
        <div  className="container mt-3">
          <h2 className='title'>Contact</h2>
          <form id='contact-form' onSubmit={handleSubmit}>
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="name"
                defaultValue={name} onBlur={handleChange}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                defaultValue={email} onBlur={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Message
              </label>
              <textarea className="form-control"  name="message" id="bio" rows="3" defaultValue={message} onBlur={handleChange}></textarea>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className="col-12">
              <button data-testid='button' id='submit' className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          </form>
        </div>
      </section>
        
    );
}

export default Contact;