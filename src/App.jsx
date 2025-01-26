import Header from "./components/Header";
// import Hero from "./components/Hero"
// import Country from "./components/Country"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import ToursPage from "./ToursPage";
import Contact from "./Contact";
import ProductDetails from "./ProductDetails";
import Footer from "./components/Footer";
import ScrollPositionManager from "./ScrollPositionManager";
import { useState, useEffect } from "react";
import logo from './assets/logo.png'
import gsap from "gsap";
import plane from './assets/loader.png'
function App() {
  const [loading, setLoading] = useState(true);
  const firstname = 'Salia'.split('')
  const lastname = 'Travel'.split('')

  console.log(firstname)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1700);
  }
  )


  useEffect(() => {
    gsap.fromTo('.plane', {
      x: '-100vw',
      // delay: 0.2
    }, {
      x: '100vw',
      duration: 2.7,
    })

    gsap.fromTo('.char', {
      opacity: 0,
      y: 50,
      rotationY: 90,
    }, {
      delay: 0.3,
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 2.1,
      stagger: 0.1, // ასოებს შორის დაგვიანება
      ease: "power3.out",

    })

    gsap.fromTo('.slogan',
      {
        opacity: 0,
        y: 30,

      },
      {
        delay: 1,
        opacity: 1,
        y: 0,
        duration: 1,
      })

    // gsap.fromTo('.loader',
    //   {
    //     opacity: 1,

    //   },
    //   {
    //     delay:1.7,
    //     opacity: 0,
    //     duration:1,
    //     ease: "power2.out",
    //   }
    // )
  }, [])



  if (loading) {
    return (
      <div className="loader">
        <img className="plane" src={plane} alt="" />
        <div>
          {
            firstname.map((a,i) => <h1 className="char" key={i}>{a}</h1>)
          }
          {
            lastname.map((a,i) => <span className="char span" key={i}>{a}</span>)
          }
          {/* <h1 className="char">{firstname.map((a) => a)}<span>{lastname.map((a) => a)}</span></h1> */}
          <p className="slogan">Where the heart finds its home</p>
        </div>
      </div>
    )
  }
  return (

    <Router className='web__page'>
      <ScrollPositionManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ToursPage" element={<ToursPage />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />

    </Router>
    // <div>
    //     <Header/>
    //     <Hero />
    //     <Country />
    // </div>
  )
}

export default App
