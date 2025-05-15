import React from 'react'
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MainSignUp from './components/MainSignUp';
import SEO from '../../components/SEO';

const SignUp = () => {
  return (
    <>
      <SEO 
        title="Sign Up - StreamFlix"
        description="Create your StreamFlix account to enjoy unlimited streaming of your favorite movies and shows."
        keywords={['StreamFlix', 'Sign Up', 'Streaming', 'Movies', 'TV Shows']}
      />
      <Header />
      <MainSignUp />
      <Footer />
    </>
  )
}

export default SignUp
