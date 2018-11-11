import React, { Component } from 'react'
import classes from './DataProvider.css'
import ReactHtmlParser from 'react-html-parser'

class HistoryList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShowHistory: false,
    }
  }

  showHistory = () => {
    this.setState({
      isShowHistory: !this.state.isShowHistory
    })
  }


  render() {
    const id = this.props.data.id,
          name =  this.props.data.name,
          history =  this.props.data.history,
          image_lead =  this.props.data.image_lead
    return (
      <div className={classes.DataProvider + " col-sm-6 m-2 p-0"}>
        <img src={image_lead} alt="" />
        <h3 className={"m-1"}>{name}</h3>
        <p className="m-2">
          {ReactHtmlParser(this.state.isShowHistory && history)}
        </p>
        <button className={classes.Button + " m-1"} onClick={this.showHistory}>
          {!this.state.isShowHistory ? 'Показать историю' : 'Скрыть историю'}
        </button>
      </div>
    )
  }
}


export default HistoryList
