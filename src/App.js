import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*download button, redownloads download icon on click*/}
        <Button>
        <a href='download_icon.png' download>
        <img src="download_icon.png" alt=""/>
        </a>
        </Button>

        {/*preview button, redirects to project GitHub page*/}
        <br></br>
        <Button
        buttonStyle="btn--preview--solid">
          <a href="https://github.com/the-template-project/root">
          <img src="preview_icon.png" alt=""/>
          </a>
        </Button>


      </header>
    </div>
  );
}

export default App;
