import React, { Component } from 'react'
import axios from 'axios'
import classes from './DataProvider.css'
import ReactHtmlParser from 'react-html-parser'

class DataProviderTest extends Component {

  constructor(props){
    super(props)
    this.state = {
      history: [],
      isShowHistory: false,
      activeHistory: 0,
    }
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

  showHistory = () => {
    this.setState({
      isShowHistory: !this.state.isShowHistory
    })
  }

  getHistory = () => {
    if (!this.isShowHistory){
      return <p>{ReactHtmlParser(this.state.isShowHistory ? this.state.item.history : null)}</p>;
    }
  }

  render(){
    const getHistory = this.getHistory
    return(
      <div className="row d-flex justify-content-center">
        {this.state.history.map((item) => (
          <div className={classes.DataProvider + " col-sm-6 my-2"} key={item.id}>
          <img src={item.image_lead} />
          <h3>{item.name}</h3>
          {getHistory}
          <button className={classes.Button} onClick={this.showHistory}>{!this.state.isShowHistory ? 'Показать историю' : 'Скрыть историю'}</button>
          </div>
        ))}
      </div>
    )
  }
}


export default DataProviderTest
