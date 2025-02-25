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

