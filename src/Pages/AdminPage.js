import React, {useState, useEffect} from 'react'
import PodcastItem from '../components/PodcastItem';
import "../styles/adminPage.css"

export const AdminPage = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Simulating API fetch by importing local JSON data
    fetch('/data/podcasts.json')
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);
  return (
    <>
      <div className='manage-podcasts'>
        
      </div>

      <div className="podcast-list">
        {podcasts.map((podcast) => (
          <PodcastItem key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </>
  )
}
