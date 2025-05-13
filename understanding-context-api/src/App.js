import './App.css';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuth();

  return user ? <Navbar /> : <Login />;
}

export default App;
