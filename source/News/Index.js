import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

export default class Index extends Component {

  constructor(props) {
    super(props)
  }
  
  render(){
    let title = "News";
    if(this.props.match.params.id){
      title = "News" + this.props.match.params.id
    }
    return(
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: title },
            { property: 'og:title', content: title }
          ]}
        />
        <div>
          news { this.props.match.params.id }
        </div>
        <ul>
          <li><Link to="/news/1">1</Link></li>
          <li><Link to="/news/2">2</Link></li>
          <li><Link to="/news/3">3</Link></li>
        </ul>
      </div>
    )
  }
}
