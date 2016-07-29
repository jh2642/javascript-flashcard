import React, { Component } from 'react'
import { browserHistory } from 'react-router'

var Terms = (props) => <div className="header-Links">
  <ul>
    <a href="javascript:;" onClick={() => browserHistory.push('/flash1')}></a>
    <a href="javascript:;" onClick={() => browserHistory.push('/flash2')}></a>
    <a href="javascript:;" onClick={() => browserHistory.push('/flash3')}></a>
    <a href="javascript:;" onClick={() => browserHistory.push('/flash4')}></a>
    <a href="javascript:;" onClick={() => browserHistory.push('/flash5')}></a>
  </ul>
  </div>

export default Terms
