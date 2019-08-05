import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OrtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fib Calculator</h1>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OrtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
