import React, { Component } from 'react'
import DataProviderTest from './DataProviderTest'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

class App extends Component {

  state = {
    history: [],
    pageTitle: 'Ваши Истории',
    isShowHistory: false
  }

  componentDidMount(){

     axios.get('http://127.0.0.1:8000/restapi/api/lead/', {method: 'HEAD', mode: 'no-cors'})
     .then(response => {
       let history = response.data
       this.setState({
         history
       })
       console.log(history);
     })
  }

  showHistory = (props) => {
    this.setState({
      isShowHistory: !this.state.isShowHistory
    })
  }

  render() {
    const history = this.state.history.map(h => {
      <DataProviderTest
        key={h.id}
        history={h.history}
        name={h.name}
        image={h.image_lead}
        showHistory={this.showHistory}
      />
    })
    return (
      <div className="container">
          <h1>{this.state.pageTitle}</h1>
          {history}
      </div>
    );
  }
}

export default App;
