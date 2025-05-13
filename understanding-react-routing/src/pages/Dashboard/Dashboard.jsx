import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

// This code defines a simple dashboard layout with navigation links to the Profile and Settings pages.
// The Outlet component is used to render the child routes within the Dashboard component.
export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
