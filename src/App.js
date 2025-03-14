import logo from './logo.svg';

import './App.css';
import React, { useState } from "react";
//import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const songs = [
  { id: 0, name: "Let me love you", duration: "05:34" },
  { id: 1, name: "Let me love you", duration: "05:34" },
  { id: 2, name: "Let me love you", duration: "05:34" },
  { id: 3, name: "Let me love you", duration: "05:34" },
];

const App = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li className="brand">
            <img src="logo.svg" alt="Spotify" /> Spotify
          </li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>

      <div className="container">
        <div className="songList">
          <h1>Best of MCS - No Copyright Sounds</h1>
          <div className="songItemContainer">
            {songs.map((song) => (
              <div className="songItem" key={song.id}>
                <img alt="" />
                <span className="songName">{song.name}</span>
                <span className="songlistplay">
                  <span className="timestamp">
                    {song.duration}
                    <FontAwesomeIcon icon={faPlayCircle} className="songItemPlay"/>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="songBanner"></div>
      </div>

      <div className="bottom">
        <input
          type="range"
          id="myProgressBar"
          min="0"
          value={progress}
          max="100"
          onChange={(e) => setProgress(e.target.value)}
        />
        <div className="icons">
          <FontAwesomeIcon icon={faStepBackward} className="fa-2x" id="previous" />
          <FontAwesomeIcon icon={faCirclePlay} className="fa-2x" id="masterplay" />
          <FontAwesomeIcon icon={faStepForward} className="fa-2x" id="next" />
        </div>
        <div className="songInfo">
          <img src="playing.gif" width="42px" alt="" id="gif" />
          <span id="masterSongName">{currentSong.name}</span>
        </div>
      </div>
    </div>
  );
};

export default App;

