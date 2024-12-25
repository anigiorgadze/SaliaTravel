import Header from "./components/Header"
// import Hero from "./components/Hero"
// import Country from "./components/Country"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProductDetails from "./ProductDetails";

function App() {
  return (

    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>

          <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
        <div style={{position: "relative"}}> 
          <h1>footer</h1>
        </div>

    </Router>
    // <div>
    //     <Header/>
    //     <Hero />
    //     <Country />
    // </div>
  )
}

export default App
