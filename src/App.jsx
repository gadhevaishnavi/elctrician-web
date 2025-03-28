import { Route, Routes } from "react-router-dom"
import Navpage from "./pages/Navpage"
import Home from './component/Home'
import AboutUs from './component/AboutUs'
// import Product from './component/Product'
import Location from './component/Location'
import ContactUs from './component/ContactUs'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for Bootstrap's JavaScript features
import Footer from "./component/Footer"
import ServiceDetail from './component/ServiceDetail';
import Gallery from "./component/Gallery"


function App() {
  
  return (
    <>

    <Navpage/>
    {/* <ContactIcon/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      {/* <Route path="/product" element={<Product/>}></Route> */}
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/location" element={<Location/>}></Route>
      <Route path="/service/:id" element={<ServiceDetail />} />
      <Route path="/gallery" element={<Gallery/>}/>

    </Routes>
      
      <Footer/>
    </>
  )
}

export default App
