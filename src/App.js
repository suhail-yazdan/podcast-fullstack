import React from 'react';
import PodcastList from './components/PodcastList';
import './index.css';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {/* <header className="header">
        <h1>Latest Podcasts</h1>
      </header> */}
      <div className='about'>
        <h2>Tune in</h2>
        <p>Find the best UK wildlife podcast and immerse yourself in the great outdoors. From elusive birds to urban wildlife, the secret lives of trees and what plants and animals to look out for this season - we have got it all covered</p>
      </div>
      <PodcastList />
      <Footer />
    </div>
  );
}

export default App;
