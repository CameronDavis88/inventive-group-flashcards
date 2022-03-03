import React, {useState} from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Flashcards from './components/Flashcards/Flashcards';
import Assessment from './components/Assessment/Assessment';
import Header from './components/Header/Header';
// import EightWastes from './components/Flashcards/EightWastes/EightWastes';
// import Custom from './components/Flashcards/Custom/Custom';
// import LeanTerminology from './components/Flashcards/LeanTerminology/LeanTerminology';
import { leanTermsListData, eightWastesListData } from './data';
import './App.css';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

function App() {
  const [customList, setCustomList] = useState([{id: 0, term: '', answer: ''},])

  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/flashcards' component={Flashcards} customList={customList} setCustomList={setCustomList} />
          {/* <Route path='/lean_terminology_cards' component={LeanTerminology} />
          <Route path='/eight_wastes_cards' component={EightWastes} />
          <Route path='/custom_cards' component={Custom} setCustomList={setCustomList} /> */}
          <Route path='/assessment' component={Assessment} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
