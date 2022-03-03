
import React, {useState} from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Landing from './components/Landing/Landing';
import Flashcards from './components/Flashcards/Flashcards';
import Assessment from './components/Assessment/Assessment';
import EightWastes from './components/Flashcards/EightWastes/EightWastes';
import Custom from './components/Flashcards/Custom/Custom';
import LeanTerminology from './components/Flashcards/LeanTerminology/LeanTerminology';
import {leanTermsListData, eightWastesListData} from './data';
import './App.css';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

function App() {
  const [leanTermsList, setLeanTermList] = useState(leanTermsListData);
  const [eightWastesList, setEightWastesList] = useState(eightWastesListData);
  const [customList, setCustomList] = useState([{term: '', answer: ''},])

  return (
    <div className="App">
      <Router>
        <Banner />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/flashcards' component={Flashcards} />
          <Route path='/lean_terminology_cards' component={LeanTerminology} />
          <Route path='/eight_wastes_cards' component={EightWastes} />
          <Route path='/custom_cards' component={Custom} setCustomList={setCustomList} />
          <Route path='/assessment' component={Assessment} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
