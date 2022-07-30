import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <form action="">
            <h2 className='main-title'>Contact Me</h2>
            <div className="form-group">
              <label htmlFor="name">Name : </label>
              <input type="text" id='name' placeholder='Your Name . . .' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email : </label>
              <input type="email" id='email' placeholder='Your Email . . .' />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message : </label>
              <textarea rows="4" id='message' placeholder='Your Message . . .'></textarea>
            </div>
            <button className='main-btn' type="submit">Send</button>
          </form>
    </div>
  )
}

export default Contact