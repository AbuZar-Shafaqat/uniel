import React, { Component } from 'react';
import Navbar from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        < Navbar />
        {/* <Projects/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </>
    )
  }
}
