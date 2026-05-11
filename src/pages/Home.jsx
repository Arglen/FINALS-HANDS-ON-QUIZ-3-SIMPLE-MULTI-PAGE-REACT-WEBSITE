import { Link } from 'react-router-dom'
import './Page.css'

function Home() {
  return (
    <div className="page">
      <h1>Welcome to MyWebsite</h1>
      <p>
        This is the <strong>Home</strong> page. Use the navigation bar above to
        explore the site.
      </p>
      <div className="page-links">
        <Link to="/about" className="btn">Learn About Us</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </div>
    </div>
  )
}

export default Home
