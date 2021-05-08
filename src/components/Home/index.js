import React, { useState, useEffect, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
const Home = (props) => {
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
  return <section id="vanta-canvas" className="hero" ref={myRef}>
        <div>
            <h2>Juan Nuñez</h2>
            <h3>Web Developer</h3>
        </div>
  </section>
}
  

export default Home;