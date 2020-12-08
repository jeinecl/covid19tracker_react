//import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import global from './global'
import indonesia from './indonesia'
import provinsi from './provinsi'
import {Navbar, Nav} from 'react-bootstrap'
//import Card from './component/Card'


const App = () => {
  return (
   // <Card />
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href=".">Covid 19 Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href=".">Global</Nav.Link>
      <Nav.Link href="/indonesia">Indonesia</Nav.Link>
      <Nav.Link href="/provinsi">Provincy</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
      <Switch>
        <Route exact path = '/' component={global}/>
        <Route path= '/indonesia' component={indonesia}/>
        <Route path= '/provinsi' component={provinsi}/>
      </Switch>
    </div>
  );
}

export default App;
