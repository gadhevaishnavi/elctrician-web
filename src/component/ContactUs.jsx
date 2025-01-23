import React from 'react'
import '../assets/css/ContactUs.css'
import Footer from './Footer'
const ContactUs = () => {
  return (
    <div className='main-div'>
    <h1 className='heading'>Conatct Us</h1>
    <div className='contact-from'>
      <h4>Name:Shubham Ankush Gayakwad</h4>
      <p>Mobile No:7028773402</p>
      <p>At : Parjana</p>
      <p>Tq : vasamat</p>
      <p>Dist : Hingoli</p>
    </div>
    <div className='contact-form2'>
    <h4>Name:Ganesh Dhumse</h4>
      <p>Mobile No:92845 28321</p>
      <p>At : somthana</p>
      <p>Tq : vasamat</p>
      <p>Dist : Hingoli</p>
    </div>
   
    {/* <Footer/> */}
    </div>
  )
}

export default ContactUs
