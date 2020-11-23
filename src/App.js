import './App.css';
import Main from './components/MainComponent';
import Dashboard from './components/DashboardComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/loggedIn" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
