import React, {useState, useEffect, useRef} from 'react'
import Home from '../src/components/Home'
import Navbar from '../src/components/Nav'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import Footer from '../src/components/Footer'

import GLOBE from 'vanta/dist/vanta.globe.min'


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
          color: 0x3fff6c,
  color2: 0x979b97,
  backgroundColor: 0x6b6e70
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <Router >
      <div ref={myRef} style={{
        height: '150vh'
      }}>
      <Navbar

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

      </div>
     
    </Router>

  );
}

export default App;
