
import React from 'react';

const ContactComponent = () => {

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>Mongia.prathamkv@gmail.com</p>
            <p>+91 8920544919</p>
            <div className="social-icons">
              <a href="#">Instagram</a>
              <a href="https://www.linkedin.com/in/pratham-mongia-bb0026212/">LinkedIn</a>
              <a href="https://github.com/prathammongia">GitHub</a>
            </div>
            <a href="resume.pdf" download className="btn btndownload">Download Resume</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btndownload">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright© Pratham Mongia</p>
      </div>
    </div>
  );
}

export default ContactComponent;
