import { Link } from 'react-router-dom'
import './Page.css'

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        We are a team of passionate developers building modern web applications
        with React and React Router.
      </p>
      <p>
        This project demonstrates smooth client-side navigation using{' '}
        <strong>BrowserRouter</strong>, <strong>Routes</strong>,{' '}
        <strong>Route</strong>, and <strong>Link</strong> — no full page reloads.
      </p>
      <div className="page-links">
        <Link to="/" className="btn">Back to Home</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </div>
    </div>
  )
}

export default About
