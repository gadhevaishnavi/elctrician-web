import React from 'react';
import '../assets/css/Home.css'; // Ensure you have the appropriate CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styles
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import '../assets/css/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import AboutUs from './AboutUs';
// import Footer from './Footer';
import ContactUs from './ContactUs';

const Home = () => {
    const sliderData = [
        {
          id: 1,
          image: img1,
          title: "Welcome To Gayakwad Electrical.",
          description: "",
        },
        {
          id: 2,
          image: img2,
          title: "Welcome To Gayakwad Electrical.",
          description: `We specialize in processing and exporting, proudly delivering
                top-quality products to wholesale customers worldwide.`,
        },
        {
          id: 3,
          image: img3,
          title: "Building Long-Term Relationships",
          // description: `Oman, UAE, Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand,
          //       Malaysia, Ghana, Benin, Togo, Cote d'Ivoire, Senegal, Mozambique,
          //       Haiti, Cameroon, Guinea, Congo, Liberia, South Africa and many more.`,
        },
      ];
  return (
    <div className="home-container">
      {/* Bootstrap Slider */}
      <Carousel
        className="home_slider"
        interval={3000}
        controls={false}
        indicators={false}
        pause={false}
      >
        {sliderData.map((data) => (
          <Carousel.Item key={data.id}>
            <img src={data.image} alt={`Slide ${data.id}`} />
            <Carousel.Caption className="slider_text">
            <h3 className="scrolling_title">{data.title}</h3>
            {data.description && <p className="scrolling_description">{data.description}</p>}
           </Carousel.Caption>

          </Carousel.Item>
        ))}
</Carousel>

      

      <AboutUs/>
      <ContactUs/>

      {/* About Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          At <strong>Gayakwad Electrical</strong>, we prioritize safety, efficiency, and customer satisfaction.
          With years of experience in residential and commercial electrical work, our skilled team ensures
          that every job is done to the highest standards.
        </p>
      </section>

      {/* <Footer/> */}
    </div>
  );
};

export default Home;
