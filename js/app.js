import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../components/_ReduxStore'
import Terms from '../components/Terms'
import Term from '../components/Term'

const newBrowserHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={newBrowserHistory}>
      <Route path="/" component={Terms} />
      <Route path="/flash1" component={Term} definition="A JavaScript command, terminated with a semicolon that, when executed, makes something         happen." answer="Statement"/>
      <Route path="/flash2" component={Term} definition="Sequences of characters, like the letters a-z, spaces, and even numbers. Extremely useful as labels, names, and content for your programs." answer="Strings"/>
      <Route path="/flash3" component={Term} definition="A function defined in an object." answer="Method"/>
      <Route path="/flash4" component={Term} definition="A quantity. You can also do math with them." answer="Numbers"/>
      <Route path="/flash5" component={Term} definition="A block of JavaScript code that you define once, and can then invoke over and over again." answer="Function"/>
      {/*Route goes here for each term view*/}
    </Router>
  </Provider>
, document.getElementById('app'))
