import  { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../assets/css/FloatingIcon.css";

const FloatingIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`floating-icons ${isVisible ? "visible" : "hidden"}`}>
      <a
        href="https://wa.me/+7028773402"
        className="floatingicon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={25} />
        <span className="tooltip">+7028773402</span>
      </a>
      <a href="tel:+96892850600" className="floatingicon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+7028773402</span>
      </a>
      <a href="mailto:info@asmakmct.com" className="floatingicon email">
        <FaEnvelope size={25} />
        <span className="tooltip">gayakwadshubham7028@gmail.com</span>
      </a>
    </div>
  );
};

export default FloatingIcon;