import React, { Component } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkSection from './components/WorkSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <Header />
        <WorkSection />
        <Footer />
      </div>
    );
  }
}

export default App;