import React, {useState} from 'react'
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

  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'about',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portfolio', description: 'Portraits of people in my life' },
    { name: 'contact', description: 'Delicious delicacies' },
    { name: 'resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <Router>
      <Navbar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navbar>  
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
