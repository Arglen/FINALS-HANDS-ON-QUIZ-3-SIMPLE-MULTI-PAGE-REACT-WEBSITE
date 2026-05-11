import { Link } from 'react-router-dom'
import './Page.css'

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Have a question or want to work together? Reach out to us!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message..." />
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
      <div className="page-links" style={{ marginTop: '1rem' }}>
        <Link to="/" className="btn btn-outline">Back to Home</Link>
      </div>
    </div>
  )
}

export default Contact
