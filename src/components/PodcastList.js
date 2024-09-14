import React, { useState, useEffect } from 'react';
import PodcastItem from './PodcastItem';

function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Simulating API fetch by importing local JSON data
    fetch('/data/podcasts.json')
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}

export default PodcastList;
