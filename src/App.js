import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoggedIn from './components/loggedInComponent';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/loggedIn" component={LoggedIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
