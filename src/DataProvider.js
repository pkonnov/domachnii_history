import React, { Component } from 'react'
import axios from 'axios'
import HistoryList from './HistoryList'
import classes from './History.css'


class DataProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      history: [],
      loanding: true
    }
  }

 componentDidMount(){

    axios.get('https://sprmspc.ru/restapi/api/lead/') // {method: 'HEAD', mode: 'no-cors'}
    .then(response => {
      let history = response.data
      this.setState({
        history: history,
        loanding: false
      })
    })

  }

  render(){
    let historyList
    if(this.state.loanding){
      historyList =
      <div className={classes.Preloader}>
        <img src="https://www.sarinform.ru/events/images/Dtk.gif" alt=""/>
        <p>Загружаю истории</p>
      </div>
    } else {
      historyList = this.state.history.map(item => (
      <HistoryList
        data={item}
        key={item.id}
      />
    ))
    }

    return (
      <div className="row d-flex justify-content-center">
        {historyList}
      </div>
    )
  }
}


export default DataProvider
