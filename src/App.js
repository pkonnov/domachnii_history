import React, { Component } from 'react'
import DataProvider from './DataProvider'

class App extends Component {

  render() {
    return (
      <div className="container">
          <DataProvider />
      </div>
    );
  }
}

export default App;
