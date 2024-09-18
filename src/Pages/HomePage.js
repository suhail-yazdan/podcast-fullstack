import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner'
import PodcastItem from '../components/PodcastItem';


export const HomePage = () => {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
      // Simulating API fetch by importing local JSON data
      fetch('/data/podcasts.json')
        .then((response) => response.json())
        .then((data) => setPodcasts(data));
    }, []);

  return (
    <div>
        <Banner />
        
        <div className='about'>
          <h2>Tune in</h2>
        
          <p>Find the best UK wildlife podcast and immerse yourself in the great outdoors. From elusive birds to urban wildlife, the secret lives of trees and what plants and animals to look out for this season - we have got it all covered</p>
        </div>

        <div className="podcast-list">
            {podcasts.map((podcast) => (
                <PodcastItem key={podcast.id} podcast={podcast} />
            ))}
        </div>        
    </div>
  )
}
