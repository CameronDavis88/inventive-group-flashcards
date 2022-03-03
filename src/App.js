import React, {useState} from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Flashcards from './components/Flashcards/Flashcards';
import Assessment from './components/Assessment/Assessment';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
// import { leanTermsList, eightWastesList } from './data';
import './App.css';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

function App() {
  // const [customList, setCustomList] = useState([{ id: 0, term: 'Inventive-group', answer: 'Paradise' }]);
  // const [customCardId, setCustomCardId] = useState(0);

  return (
    <div className="App">
      <Router>
       <Header/>
       <Banner />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/flashcards' component={Flashcards}  />
          <Route path='/assessment' component={Assessment} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
