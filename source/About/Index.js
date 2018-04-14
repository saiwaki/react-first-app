import React, { Component } from 'react'
import { Helmet } from "react-helmet"

export default class Index extends Component {

  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div>
        <Helmet
          title="About"
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'About' },
            { property: 'og:title', content: 'About' }
          ]}
        />
        <div>
          about
        </div>
      </div>
    )
  }
}
