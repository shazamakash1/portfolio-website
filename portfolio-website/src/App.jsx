import React, { Component } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HeroSection />
        <Header />
        <WorkSection />
        <Footer /> */}
        <Header />
        <HeroSection />
        <Footer />

      </div>
    );
  }
}

export default App;