//import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import global from './global'
import indonesia from './indonesia'
import provinsi from './provinsi'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/' >Global</Link>
          </li>
          <li>
            <Link to='/indonesia' >Indonesia</Link>
          </li>
          <li>
            <Link to='/provinsi' >Provinsi</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path = '/' component={global}/>
        <Route path= '/indonesia' component={indonesia}/>
        <Route path= '/provinsi' component={provinsi}/>
      </Switch>
    </div>
  );
}

export default App;
