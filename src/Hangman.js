import React, { Component } from "react";
// import { randomWord } from './words';

import './index.css';

import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    questions: [
      { question: "What is the national bird of India?", answer: "peacock" },
      { question: "What is the color of a banana?", answer: "yellow" },
      { question: "What is the shape of a circle?", answer: "round" },
      { question: "What month comes after March?", answer: "april" },
      { question: "What color is grass?", answer: "green" },
      { question: "What is the name of the planet we live on?", answer: "earth" }
    ]
  };

  constructor(props) {
    super(props);

    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      currentQuestion: this.getRandomQuestion()
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  getRandomQuestion() {
    const { questions } = this.props;
    return questions[Math.floor(Math.random() * questions.length)];
  }

  // reset the game and put things in default
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      currentQuestion: this.getRandomQuestion()
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    const { currentQuestion, guessed } = this.state;
    const answer = currentQuestion.answer.toLowerCase();

    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) || 'aeiou'.includes(ltr) ? ltr : "_"));
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value.toLowerCase();

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.currentQuestion.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const { handleGuess } = this;
    const { guessed } = this.state;

    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        className="Hangman-btn text-black"
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const { nWrong, currentQuestion } = this.state;
    const { images, maxWrong } = this.props;

    let alternateText = `${nWrong} wrong guesses`;

    return (
      <>
    
    <div className='Hangman md:flex font-serif'>
  <div>
    <h1 className="text-black ">Hangman</h1>
    <img src={images[nWrong]} alt={alternateText}/> 
  </div>
 
  <div className="md:mt-40">
    <p className="font-sans font-bold text-2xl">Q: {currentQuestion.question}</p>
    <p className="font-sans">Number Wrong: {nWrong}</p>
  
    { this.guessedWord().join("") === currentQuestion.answer.toLowerCase() ? 
      <p className="font-sans">You WIN!</p> :
      (nWrong === maxWrong ?
        <div>
          <p className="font-sans">YOU LOSE </p>
          <p className="font-sans">Correct Answer is: {currentQuestion.answer}</p>
        </div> :
        <div>
          <p className='Hangman-word font-serif'>{this.guessedWord()}</p>
          <div className='Hangman-btn text-black font-serif'>{this.generateButtons()}</div>
        </div>)
    }
  
    <button id='reset' onClick={this.resetGame} className="font-sans">Reset Game</button>
  </div>
</div> 

      </>
    );
  }
}

export default Hangman;
