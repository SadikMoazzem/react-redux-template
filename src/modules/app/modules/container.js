import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as moduleActions from '../actions';

const mapStateToProps = (state) => ({
    state: state
 })

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(moduleActions, dispatch)
})

class App extends Component {
    render() {
      console.log(this.props.state);

      return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p onClick={()=>this.props.actions.simpleAction()}>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
