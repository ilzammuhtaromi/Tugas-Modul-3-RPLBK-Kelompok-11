import React from 'react';
import './App.css';
import Home from "./Warung/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div id = "wrapper" className="App container">
        <div class="container">                     
            <h2>Warung Makan Seadanya</h2>
            <h3>Kelompok 11 </h3>        
                <Home />
        </div>
      </div>
    )
  }
}

export default App;