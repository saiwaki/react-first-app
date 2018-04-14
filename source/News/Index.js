import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

export default class Index extends Component {

  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div>
        <Helmet
          title="News"
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'News' },
            { property: 'og:title', content: 'News' }
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
