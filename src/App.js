import './App.css';
import Home from '../src/components/Home'
import Navbar from '../src/components/Nav'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import Footer from '../src/components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Route path="/resume" exact>
              <Resume/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
    </div>
    <Footer />

    </Router>

  );
}

export default App;
