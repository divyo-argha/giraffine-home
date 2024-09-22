import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import About from './components/about/About.jsx';
import Activities from './components/activity/Activity.jsx';
import Contact from './components/contact/Contact.jsx';
import Education from './components/education/Education.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      {/* <Teacher /> */}
      <Activities />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
