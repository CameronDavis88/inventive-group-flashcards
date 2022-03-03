import React, { useState, useEffect } from 'react';
import { leanTermsList, eightWastesList } from '../../data';
import Flashcard from './Flashcard';

const Flashcards = () => {
  const [termSide, setTermSide] = useState(true);
  const [leanView, setLeanView] = useState(false);
  const [wastesView, setWastesView] = useState(false);
  const [customView, setCustomView] = useState(false);
  const [termInput, setTermInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [customList, setCustomList] = useState([{ id: 0, term: 'Inventive-group', answer: 'Paradise' },]);
  const [customCardId, setCustomCardId] = useState(0);

  const createFlashcard = () => {
    setCustomList.push({ id: customCardId + 1, term: termInput, answer: answerInput });
    alert('Your flashcard has been added');
    setTermInput('');
    setAnswerInput('');
    setCustomCardId(customCardId + 1)
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

  const mappedLeanCards = leanTermsList.map((flashcard) => {
    return (
      <Flashcard key={flashcard.id} term={flashcard.term} answer={flashcard.answer} setTermSide={setTermSide} termSide={termSide} />
    )
  });

  const mappedWastesCards = eightWastesList.map((flashcard) => {
    return (
      <Flashcard key={flashcard.id} term={flashcard.term} answer={flashcard.answer} setTermSide={setTermSide} termSide={termSide}  />
    )
  });

  const mappedCustomCards = customList.map((flashcard) => {
    return (
      <Flashcard key={flashcard.id} term={flashcard.term} answer={flashcard.answer} setTermSide={setTermSide} termSide={termSide}  />
    )
  });


  return (
    <div>
      Flashcards
      <div className='card-links' >
        <button onClick={toLeanView} >Lean Terminology</button>
        <button onClick={toWastesView} >8 Wastes</button>
        <button onClick={toCustomView} >Custom</button>
      </div>

      {leanView ? mappedLeanCards : <></>}
      {wastesView ? mappedWastesCards : <></>}
      {customView 
      ?
            <section className='making-custom-card'>
              <h2>Make your own flashcard</h2>
              <input onChange={(e) => setTermInput(e.target.value)} placeholder='Term' value={termInput} />
              <input onChange={(e) => setAnswerInput(e.target.value)} placeholder='Answer' value={answerInput} />
              <button onClick={createFlashcard}>Create Flashcard</button>
              <br />
              {mappedCustomCards}
            </section>
           :
           <></> 
        }
    </div>
  );
};

export default Flashcards;
