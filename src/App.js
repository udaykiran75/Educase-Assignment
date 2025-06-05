import './App.css'
import {Switch, Route} from 'react-router-dom'

import Welcome from './Pages/Welcome'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Settings from './Pages/Settings'

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/Signup" component={Signup} />
    <Route exact path="/Signin" component={Signin} />
    <Route exact path="/Account" component={Settings} />
  </Switch>
)
export default App