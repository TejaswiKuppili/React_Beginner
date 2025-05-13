import { Link } from 'react-router-dom';
import './Navbar.css';

// This code defines a simple navigation bar with links to the Home, About, and Dashboard pages
//  The Link component from react-router-dom is used to create client-side navigation without full page reloads.
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
