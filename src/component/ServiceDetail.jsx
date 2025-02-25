import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../component/Loader'; // Import the Loader component
import '../assets/css/ServiceDetail.css';
// import Loader from './Loader';

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const service = location.state?.service;

  useEffect(() => {
    // Simulating data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader will be visible for 1 second

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!service) {
    return <h2 className="not-found">Service Not Found</h2>;
  }

  return (
    <div className="service-detail-container">
    
      {loading ? (
        <Loader /> // Using the separate Loader component
      ) : (
        <div className="service-content">
          <button onClick={() => navigate(-1)} className="back-button">← Back</button>
          <img src={service.image} alt={service.title} className="service-image" />
          <h2>{service.title}</h2>
          <p>{service.description}</p>

        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
