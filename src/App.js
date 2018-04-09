import React, { Component } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/works/Works';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
        <div>
          <Preloader />
          <Header />
          <Home />
          <About />
          <Works />
          <Contact />
          <Footer />
        </div>
    );
  }
}

export default App;
