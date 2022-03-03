import React, { useState } from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
import Question from './Question';
import { leanTermsList, eightWastesList } from '../../data';

const Assessment = ({ customList }) => {
  const [leanTestView, setLeanTestView] = useState(false);
  const [wastesTestView, setWastesTestView] = useState(false);
  const [customTestView, setCustomTestView] = useState(false);


  //Need to keep track of score in this component

  const toLeanTest = () => {
    setLeanTestView(true);
    setCustomTestView(false);
    setWastesTestView(false);
  };

  const toCustomTest = () => {
    setLeanTestView(false);
    setCustomTestView(true);
    setWastesTestView(false);
  };

  const toWastesTest = () => {
    setLeanTestView(false);
    setCustomTestView(false);
    setWastesTestView(true);
  };

  const submitTest = () => {
    setLeanTestView(false);
    setCustomTestView(false);
    setWastesTestView(false);
  }

  const mappedLeanQuiz = leanTermsList.map((question) => {
    return (
      <Question key={question.id} id={question.id} term={question.term} correctAnswer={question.answer} list={leanTermsList} />
    )
  });

  const mappedWastesQuiz = eightWastesList.map((question) => {
    return (
      <Question key={question.id} id={question.id} term={question.term} correctAnswer={question.answer} list={eightWastesList} />
    )
  });

  const mappedCustomQuiz = customList.map((question) => {
    return (
      <Question key={question.id} id={question.id} term={question.term} correctAnswer={question.answer} list={customList} />
    )
  });



  return (
    <div>
      Assessment
      <Banner />
      <section>
        <h2 onClick={toLeanTest} >Lean Terminology</h2>
        <h2 onClick={toWastesTest} >8 Wastes</h2>
        <h2 onClick={toCustomTest} >Custom Terms</h2>
      </section>

      <section>
        {leanTestView ? mappedLeanQuiz : <></> }
        {wastesTestView ? mappedWastesQuiz : <></>}
        {customTestView ? mappedCustomQuiz : <></>}
      </section>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Assessment);