import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { leanTermsListData, eightWastesListData } from './data';
import Flashcard from './Flashcard';


const Flashcards = ({ customList, setCustomList}) => {
  const [termList, setTermList] = useState([]);
  const [termSide, setTermSide] = useState(true);

  


  return (

    <div>
      Flashcards
      <Banner />
      {termList.map((flashcard) => {
        <Flashcard key={flashcard.id} term={flashcard.term} answer={flashcard.answer} setTermSide={setTermSide} termSide={termSide} />
      })}
    </div>
  );
};

export default Flashcards;