import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Term extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnswered: false
    }
  }

  showAnswer() {
    this.setState({isAnswered: !this.state.isAnswered})
  }

  render() {
    // Add description, and make this look way better
    // onClick redirect them to /
      return <div className="flashCard">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                  <div className="mdl-card__title mdl-card--expand">
                  </div>
                  <div className="mdl-card__supporting-text">
                  {this.props.route.definition}
                  </div>
                  <p className="mdl-card__supporting-text" hidden={!this.state.isAnswered}>
                    {this.props.route.answer}
                  </p>
                  <div className="mdl-card__actions mdl-card--border">
                    <a onClick={() => this.showAnswer()} className="answerButton" href="#">ANSWER</a>
                    <a className="nextButton" href={this.props.route.next}>NEXT</a>
                  </div>
                </div>
              </div>
  }
}


const mapStateToProps = function(store) {
  return {
    // props go on left, state goes on right
    score: store.termState.score,
  }
}
export default connect(mapStateToProps)(Term)
