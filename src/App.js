import './App.css';
import Navbar from '../src/components/Nav'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import { Router } from 'react-router';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Contact />
      </div>
    </Router>

  );
}

export default App;
