import React from "react";
// import "../assets/css/GoogleMap.css";
// import '../assets/css/Location.css'
// import Footer from "./Footer";

const Location = () => {
  return (
    <div className="map-container">
      {/* Embedded Google Map via iframe */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/@19.1823872,77.3029303,14z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126749.43969291597!2d77.02953598222647!3d19.71131271171664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1c9181fd0b555%3A0xf334b12204d2e8e3!2sHingoli%2C%20Maharashtra%20431701!5e0!3m2!1sen!2sin!4v1699014598246!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Details Overlay */}
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Get in touch with us Today</p>
        <h3>Call us</h3>
        <p>Mobile: +968 92850600</p>
        <p>Tel: +968 24050604</p>
        <h3>Address</h3>
        <p>
          P.O.BOX 1741, POSTAL CODE 122, AL MABELA,
          <br />
          SULTANATE OF OMAN, C.R.NO 1341511
        </p>
        <h3>Email</h3>
        <p>info@asmkmct.com</p>
      </div>
      {/* <Footer></Footer> */}
    </div>
    
  );
};

export default Location;
