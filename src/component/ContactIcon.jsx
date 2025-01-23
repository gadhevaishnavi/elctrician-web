import React from "react";
import { PhoneIcon } from "@heroicons/react/solid"; // Phone icon
import { MailIcon } from "@heroicons/react/solid"; // Email icon
import { ChatAlt2Icon } from "@heroicons/react/outline"; // WhatsApp icon
import '../assets/css/ContactIcon.css'

const ContactIcon = () => {
  return (
    <div className="fixed top-1/4 right-4 flex flex-col space-y-4 icons">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/7028773402" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <ChatAlt2Icon className="w-6 h-6 text-white" />
      </a>

      {/* Phone Icon */}
      <a
        href="tel:+7028773402" // Replace with your phone number
        className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <PhoneIcon className="w-6 h-6 text-white" />
      </a>

      {/* Email Icon */}
      <a
        href="gayakwadshubham7028@gmail.com" // Replace with your email address
        className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
      >
        <MailIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default ContactIcon;
