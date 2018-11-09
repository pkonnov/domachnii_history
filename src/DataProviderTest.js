import React, { Component } from 'react'
import classes from './DataProvider.css'
import ReactHtmlParser from 'react-html-parser'

export default props => (

  <div className="row d-flex justify-content-center">
      <div className={classes.DataProvider + " col-sm-6 my-2"} key={props.key}>
      <img src={props.image} />
      <h3>{props.name}</h3>
      {ReactHtmlParser(props.isShowHistory ? props.history : null)}
      <button className={classes.Button} onClick={props.showHistory}>
        {!props.isShowHistory ? 'Показать историю' : 'Скрыть историю'}
      </button>
      </div>
  </div>
)
