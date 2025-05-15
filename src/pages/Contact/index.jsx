import React from 'react';
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MainContact from './components/MainContact';
import SEO from '../../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Me | StreamFlix" 
        description="Get in touch with the StreamFlix team. We'd love to hear from you!" 
        keywords={['StreamFlix', 'contact', 'support', 'customer service']} 
      />
      <Header />
      <MainContact />
      <Footer />
    </>
  );
}

export default Contact;
