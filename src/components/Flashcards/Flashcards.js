import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { leanTermsList, eightWastesList } from './data';
import Flashcard from './Flashcard';

const Flashcards = ({ customList, setCustomList }) => {
  const [termList, setTermList] = useState([]);
  const [termSide, setTermSide] = useState(true);
  const [leanView, setLeanView] = useState(false);
  const [wastesView, setWastesView] = useState(false);
  const [customView, setCustomView] = useState(false);
  const [makeCustomView, setMakeCustomView] = useState(true);
  const [termInput, setTermInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');

  const createFlashcard = () => {
    setCustomList.push({ term: termInput, answer: answerInput });
    alert('Your flashcard has been added');
    setTermInput('');
    setAnswerInput('');
  };

  const toLeanView = () => {
    setLeanView(true);
    setCustomView(false);
    setWastesView(false);
  };

  const toWastesView = () => {
    setLeanView(false);
    setCustomView(false);
    setWastesView(true);
  };

  const toCustomView = () => {
    setLeanView(false);
    setCustomView(true);
    setWastesView(false);
  };

  if (leanView) {
    setTermList(leanTermsList);
  } else if (wastesView) {
    setTermList(eightWastesList);
  } else if (customView) {
    setTermList(customList);
  };

  const mappedCards = termList.map((flashcard) => {
    <Flashcard key={flashcard.id} term={flashcard.term} answer={flashcard.answer} setTermSide={setTermSide}
      termSide={termSide} leanView={leanView} setLeanView={setLeanView} wastesView={wastesView} setWastesView={setWastesView}
      customView={customView} setCustomView={setCustomView} />
  });

  return (
    <div>
      Flashcards
      <Banner />
      <div className='card-links' >
        <button onClick={toLeanView} >Lean Terminology</button>
        <button onClick={toWastesView} >8 Wastes</button>
        <button onClick={toCustomView} >Custom</button>
      </div>

      {makeCustomView
        ?
        <section className='making-custom-card'>
          <h2>Make your own flashcard</h2>
          <input onChange={(e) => setTermInput(e.target.value)} placeholder='Term' value={termInput} />
          <input onChange={(e) => setAnswerInput(e.target.value)} placeholder='Answer' value={answerInput} />
          <button onClick={createFlashcard}>Create Flashcard</button>
          <br />
          <button onClick={setMakeCustomView(false)} >Practice with your custom flashcards</button>
        </section>
        :
        <>
        {mappedCards}
        </>
      }
    </div>
  );
};

export default Flashcards;