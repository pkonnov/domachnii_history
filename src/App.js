import React, { Component } from 'react'
import DataProvider from './DataProvider'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row d-flex justify-content-center my-4">
            <h2>Ваши Истории</h2>
          </div>
        </div>
        <div className="container">
            <DataProvider />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
