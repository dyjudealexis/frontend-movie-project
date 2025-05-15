import React from 'react';
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MainLogin from './components/MainLogin';
import SEO from '../../components/SEO';

const Login = () => {
  return (
    <>
      <SEO
        title="Login - StreamFlix"
        description="Login to your StreamFlix account to enjoy unlimited streaming of your favorite shows and movies."
        keywords={['StreamFlix', 'login', 'streaming', 'movies', 'TV shows']}
      />
      <Header />
      <MainLogin />
      <Footer />
    </>
  );
};

export default Login;