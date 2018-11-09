import React, { Component } from 'react'
import axios from 'axios'
import classes from './DataProvider.css'
import ReactHtmlParser from 'react-html-parser'

class DataProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      history: [],
      isShowHistory: false,
      activeHistory: null,
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

  showHistory = (props) => {
    this.setState({
      isShowHistory: !this.state.isShowHistory
    })
  }

  render(){
    return(
      <div className="row d-flex justify-content-center">
        {this.state.history.map((item, index) => (
          <div className={classes.DataProvider + " col-sm-6 my-2"} key={index}>
          <img src={item.image_lead} />
          <h3>{item.name}</h3>
          {ReactHtmlParser(this.state.isShowHistory ? item.history : null)}
          <button className={classes.Button}
            onClick={this.showHistory}>
            {!this.state.isShowHistory ? 'Показать историю' : 'Скрыть историю'}
          </button>
          </div>
        ))}
      </div>
    )
  }
}


export default DataProvider
