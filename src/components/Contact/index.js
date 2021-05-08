import React from 'react';

function Contact(){
    return (
        <div className="container mt-3">
          <h2 class="text-center">Contact</h2>
          <div>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="bio" class="form-label">
                Message
              </label>
              <textarea class="form-control" id="bio" rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
    );
}

export default Contact;