import React, { Component } from 'react'
import { css } from 'aphrodite'
import { styles } from './Style.js'
import auth0 from 'auth0-js'
import Helmet from "react-helmet"

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.auth0 = new auth0.WebAuth({
      domain: 'daraf.auth0.com',
      clientID: 'd27XpxF2JPP6h2wXTZNXBjs4VpEe8L2A',
      redirectUri: 'http://localhost:3033/callback/auth',
      audience: 'https://daraf.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    })
  }

  componentDidMount(){
    document.title = "Amazing Page";
  }

  render(){
    // this.auth0.authorize()

    return(
      <div className={css(styles.container)}>
        <Helmet
          title="Home"
          meta={[
            { name: "google-site-verification", content:"JsIFmRXH4hzC39YbTGopWzK7FreWJ5CswRzJhNL6ZeE" },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'Home' },
            { property: 'og:title', content: 'Home' }
          ]}
        />
        <div>
          insert react! {this.props.v}
        </div>
      </div>
    )
  }
}
