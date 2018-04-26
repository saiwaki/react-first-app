import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './Home/Index'
import About from './About/Index'
import News from './News/Index'
import NotFound from './NotFound'
//aa
export default class Routing extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <base href="/" />
          <div>
            <Switch>
              <Route exact path="/" render={ (props) => <Home {...props} v="abc" /> } />
              <Route exact path="/about" component={About} />
              <Route exact path="/news" component={News} />
              <Route sensitive path="/news/:id" component={News} />
              <Route component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
