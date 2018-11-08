import React, { Component } from 'react'
import axios from 'axios'
import classes from './DataProvider.css'

class DataProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      history: [],
      isShowHistory: false,
      activeHistory: 0,
    }
  }

 componentDidMount(){

    axios.get('http://localhost:8000/api/lead/', {method: 'HEAD', mode: 'no-cors'})
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


  render(){
    return(
      <div className="row d-flex justify-content-center">
        {this.state.history.map((item) => (
          <div className={classes.DataProvider + " col-sm-4 my-2"} key={item.id}>
          <img src={item.image_lead} />
          <h3>{item.name}</h3>
          <p>{this.state.isShowHistory ? item.history : null}</p>
          <button className={classes.Button} onClick={this.showHistory}>{!this.state.isShowHistory ? 'Показать историю' : 'Скрыть историю'}</button>
          </div>
        ))}
      </div>
    )
  }
}


export default DataProvider
