import React from 'react';
import "../styles/podcastitem.css"

function PodcastItem({ podcast }) {
  return (
    <div className="podcast-item">
      <img src={`./images/${podcast.image}`} alt={podcast.title} className="podcast-image" />
      <div className="podcast-info">
        <small>{podcast.date}</small>
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <button className="play-button">Play Now</button>
      </div>
    </div>
  );
}

export default PodcastItem;
