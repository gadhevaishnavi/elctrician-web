// import React, { useState } from 'react';
// import '../assets/css/AboutUs.css';
// import img1 from '../assets/images/aboutimg1.jpeg'
// import img2 from '../assets/images/aboutimg2.jpeg'
// import img3 from '../assets/images/aboutimg3.jpeg'
// // import vedio1 from '../assets/images/vedio1.mp4'
// // import vedio2 from '../assets/images/vedio2.mp4'
// import ShubhamImage from '../assets/images/shubham.jpg'
// import ganesh from '../assets/images/ganesh.jpg'
// import VideoSection from './VedioSection';
// const AboutUs = () => {
//   const handleButtonClick = (serviceType) => {
//     alert(`You clicked on ${serviceType}`);
//   };
  
//   return (
//     <div className="about-us-container">
//       <header className="about-header">
//         <h1>About Us</h1>
//         <p>Your Trusted Partner for All Electrical Needs</p>
//       </header>
//       <section className="mission-section">
//         <h2>Our Mission</h2>
//         <p>
//           At <strong>Gayakwad Electrical</strong>, we are committed to providing top-notch electrical solutions with a focus on safety, quality, and customer satisfaction. Whether it’s residential, commercial, or industrial work, we bring expertise and dedication to every project.
//         </p>
//       </section>

//       {/* Video Section  */}
      
//        {/* <div className="video-section">
//       <iframe src={vedio1} frameborder="0"></iframe>
//       </div>
//       <div className='vedio-section2'>
//         <iframe src={vedio2} frameborder="0"></iframe>
//       </div> */}
//       <VideoSection/>

//       <section className="services-section">
//       <h2>What We Offer</h2>
//       <div className="services">
//         {/* Residential Services */}
//         <div className="service">
//           <img src={img1} alt="Residential Services" />
//           <h3>Residential Services</h3>
//           <p>
//             We handle home wiring, lighting installation, and electrical
//             repairs with precision and care.
//           </p>
//           <button onClick={() => handleButtonClick("Residential Services")}>
//             Learn More
//           </button>
//         </div>

//         {/* Commercial Services */}
//         <div className="service">
//           <img src={img2} alt="Commercial Services" />
//           <h3>Commercial Services</h3>
//           <p>
//             From office setups to electrical system upgrades, we ensure your
//             business operates without disruptions.
//           </p>
//           <button onClick={() => handleButtonClick("Commercial Services")}>
//             Learn More
//           </button>
//         </div>

//         {/* Emergency Services */}
//         <div className="service">
//           <img src={img3} alt="Emergency Services" />
//           <h3>Emergency Services</h3>
//           <p>
//             We’re available 24/7 to handle urgent electrical issues and restore
//             power promptly.
//           </p>
//           <button onClick={() => handleButtonClick("Emergency Services")}>
//             Learn More
//           </button>
//         </div>
//        </div>
//       </section>

//       <section className="team-section">
//         <h2>Meet Our Experts</h2>
//         <div className="team-members">
//           <div className="team-member">
//             <img
//               src={ShubhamImage}
//               alt="John Doe"
//               className="member-photo"
//             />
//             <h3>Shubham Gayakwad</h3>
//             <p>Master Electrician</p>
//           </div>
//           <div className="team-member">
//             <img
//               src={ganesh}
//               alt="Jane Smith"
//               className="member-photo"
//             />
//             <h3>Ganesh Dhumse</h3>
//             <p>Senior Technician</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState } from 'react';
import '../assets/css/AboutUs.css';
import img1 from '../assets/images/aboutimg1.jpeg';
import img2 from '../assets/images/aboutimg2.jpeg';
import img3 from '../assets/images/aboutimg3.jpeg';
import ShubhamImage from '../assets/images/shubham.jpg';
import ganesh from '../assets/images/ganesh.jpg';
import VideoSection from './VedioSection';

const AboutUs = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image: img1,
      title: 'Residential Services',
      description: 'We handle home wiring, lighting installation, and electrical repairs with precision and care.',
    },
    {
      id: 2,
      image: img2,
      title: 'Commercial Services',
      description: 'From office setups to electrical system upgrades, we ensure your business operates without disruptions.',
    },
    {
      id: 3,
      image: img3,
      title: 'Emergency Services',
      description: 'We’re available 24/7 to handle urgent electrical issues and restore power promptly.',
    },
  ];

  const handleLearnMore = (serviceId) => {
    const service = services.find((service) => service.id === serviceId);
    setSelectedService(service);
  };

  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your Trusted Partner for All Electrical Needs</p>
      </header>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>Gayakwad Electrical</strong>, we are committed to providing top-notch electrical solutions with a focus on safety, quality, and customer satisfaction. Whether it’s residential, commercial, or industrial work, we bring expertise and dedication to every project.
        </p>
      </section>

      {/* Video Section */}
      <VideoSection />

      <section className="services-section">
        <h2>What We Offer</h2>
        <div className="services">
          {services.map((service) => (
            <div key={service.id} className="service">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button onClick={() => handleLearnMore(service.id)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedService && (
        <section className="selected-service">
          <h2>Learn More About:</h2>
          <img src={selectedService.image} alt={selectedService.title} />
          <h3>{selectedService.title}</h3>
        </section>
      )}

      <section className="team-section">
        <h2>Meet Our Experts</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ShubhamImage} alt="John Doe" className="member-photo" />
            <h3>Shubham Gayakwad</h3>
            <p>Master Electrician</p>
          </div>
          <div className="team-member">
            <img src={ganesh} alt="Jane Smith" className="member-photo" />
            <h3>Ganesh Dhumse</h3>
            <p>Senior Technician</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

