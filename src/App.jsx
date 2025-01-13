import Header from "./components/Header"
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

function App() {
  return (

    <Router>
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
