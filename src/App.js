import logo from './logo.svg';

import './App.css';
import React, { useState, useRef } from "react";
//import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const songsList = [
  { songName: "Diya Aur Baati Hum", filePath: "./song/1.mp3", coverPath: "./covers/cover1.jpg" },
  { songName: "Har Funn Maula", filePath: "./song/2.mp3", coverPath: "./covers/cover2.jpg" },
  { songName: "Guilty - Karan Aujla", filePath: "./song/3.mp3", coverPath: "./covers/cover3.jpg" },
  {songName: "Tu Hi Meri Shab Hai - Gangster 320Kbps", filePath: "song/4.mp3", coverPath: "covers/cover4.jpg"},
	{songName: "Lut Gaye - Jubin Nautiyal", filePath: "song/5.mp3", coverPath: "covers/cover5.jpg"},
	{songName: "Mummy Kassam - Coolie No 1", filePath: "song/6.mp3", coverPath: "covers/cover6.jpg"},
	{songName: "Jai Veeru - Khasa Aala Chahar", filePath: "song/7.mp3", coverPath: "covers/cover7.jpg"},
	{songName: "Saiyyonee - Yasser Desai", filePath: "song/8.mp3", coverPath: "covers/cover8.jpg"},
];

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songsList[songIndex].filePath));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    let newIndex = songIndex + 1 >= songsList.length ? 0 : songIndex + 1;
    setSongIndex(newIndex);
    audioRef.current.src = songsList[newIndex].filePath;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const prevSong = () => {
    let newIndex = songIndex - 1 < 0 ? songsList.length - 1 : songIndex - 1;
    setSongIndex(newIndex);
    audioRef.current.src = songsList[newIndex].filePath;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="App">
      <h1>Spotify Clone</h1>
      <div className="player">
        <img src={songsList[songIndex].coverPath} alt="cover" />
        <h2>{songsList[songIndex].songName}</h2>
        <div className="controls">
          <FontAwesomeIcon icon={faStepBackward} size="2x" onClick={prevSong} />
          <FontAwesomeIcon icon={isPlaying ? faPauseCircle : faPlayCircle} size="2x" onClick={togglePlayPause} />
          <FontAwesomeIcon icon={faStepForward} size="2x" onClick={nextSong} />
        </div>
      </div>
    </div>
  );
}

export default App;