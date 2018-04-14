import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <hr />
      </div>
    )
  }
}
