import React from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
import Question from './Question';
import { leanTermsList, eightWastesList } from '../../data';

const Assessment = ({ customList }) => {
//Need to keep track of score in this component


const mappedTermsQuiz = leanTermsList.map((question) => {

});

const mappedWastesQuiz = eightWastesList.map((question) => {
  
});

const mappedCustomQuiz = customList.map((question) => {
  
});



  return (
    <div>
      Assessment
      <Banner />

    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Assessment);