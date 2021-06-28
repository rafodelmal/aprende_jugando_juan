import React, {useState, Component, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components

import 'bootswatch/dist/lux/bootstrap.min.css'

import avatar from "assets/img/faces/marc.jpg";

import Header from "components/ahorcado/Header";
import Figure from "components/ahorcado/Figure";
import WrongLetters from "components/ahorcado/WrongLetters";
import Word from "components/ahorcado/Word";
import Popup from "components/ahorcado/Popup";
import Notification from "components/ahorcado/Notification";
import { showNotification as show, checkWin } from "components/helpers/helpers";


const API = process.env.REACT_APP_API;

const words = ['juego','manzana', 'espejo', 'armario', 'casa'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

 function Ahorcado() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
      const handleKeydown = event => {
        const { key, keyCode } = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters => [...currentLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
      setPlayable(true);

      // Empty Arrays
      setCorrectLetters([]);
      setWrongLetters([]);

      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
    }
  

 

  return ( 

    <>
    <Header />
    <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
    <Notification showNotification={showNotification} />
  </>
      
    
  );
}
export default Ahorcado;
