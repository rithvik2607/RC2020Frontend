import './App.css'
import Main from './components/MainComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
