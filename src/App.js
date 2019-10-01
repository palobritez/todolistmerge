import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPeople from './buscarpersona'


function Index() {
  return <h2>Index</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
       <div>
         <nav>
           <ul>
             <li>
               <Link to="/">Index</Link>
             </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/users">Users</Link>
             </li>
           </ul>
         </nav>
         
           <Route path="/" exact component={Index}/>
           
           <Route path="/about" component={About}/>
           <Route path="/users" component={Users}/>
         
       </div>
     </Router>
     <div>YO QUIERO UN ERROR</div>
    </div>

  );
}
export default App;
