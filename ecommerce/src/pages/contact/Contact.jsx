import React from 'react';
// import {Container, Rows, col} from 'react-bootstrap'
// import Contact from '../contact/Contact'
import emailjs from 'emailjs-com'

const Contact = () => {

    function submit(e){
    e.preventDefault();

    emailjs.sendForm('service_2ey3dth', 'template_pfj4h9j', e.target, 'eGD683LQjjLvczEFA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div className="container">
        <h1 className='Contact'>Contact</h1>
        <form onSubmit={submit}>
        <div className="col-md-6 mt-3">
            <label for="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="first"></input>
        </div>
        <div className="col-md-6">
            <label for="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="last"></input>
    
        </div>
        <div className="col-md-8">
            <label for="email" className="form-label">E-mail</label>
            <input type="text" className="form-control" name="email"></input>

        </div>
        <div className="col-md-4">
            <label for="phone" className="form-label">Phone Number</label>
            <input type="text" className="form-control" name="phone" placeholder="801-123-123"></input>
        </div>
        <div className="col-md-12">
            <label for="comments" className="form-label">Comments, any question you have?</label>
            <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <div className="col-md-12 mt-3">
            <button classNameName='add-button'>Submit</button>
        </div>
        </form>
        </div>
    )

}

export default Contact;