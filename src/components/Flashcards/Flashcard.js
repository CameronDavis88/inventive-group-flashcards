import React, { useState, useEffect } from 'react';


const Flashcard = ({ term, answer, setTermSide, termSide, leanView, customView, wastesView, setLeanView, setWastesView, setCustomView }) => {
 

    

    return (
        <div className='flashcard' >
            {termSide
                ?
                <section className='term-view' >
                    <h3>Term:</h3>
                    <h3>{term}</h3>
                    <button onClick={() => setTermSide(false)} >See Definition</button>
                </section>
                :
                <section className='answer-view' >
                    <h3>Definition:</h3>
                    <h3>{answer}</h3>
                    <button onClick={() => setTermSide(true)} >See Term</button>
                </section>
            }
        </div>
    );
};

export default Flashcard;