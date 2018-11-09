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

     axios.get('https://sprmspc.ru/restapi/api/lead/', {method: 'HEAD', mode: 'no-cors'})
     .then(response => {
       let history = response.data
       this.setState({
         history
       })
       console.log(history);
     })
  }

  showHistory = () => {
    this.setState({
      isShowHistory: !this.state.isShowHistory
    })
  }

  render() {
    const history = this.state.history.map((h, index) => {
      return (<DataProviderTest
                key={h.id}
                id={h.id}
                name={h.name}
                history={h.history}
                image={h.image_lead}
                showHistory={this.showHistory.bind(this, h.history)}
              />)
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
