import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ExampleStepper from './components/ExampleStepper';

import logo from './logo.svg'
import './App.css'

function HomeContent(props) {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  )
}

function NotFound(props) {
  return (
    <p className="App-intro">
      Not sure what you were trying to find.. but it isn't there..
    </p>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Container>
          <Row>
            <Col>&nbsp;</Col>
            <Col><Link to="/">Home</Link></Col>
            <Col><Link to="/stepper">Stepper</Link></Col>
            <Col>&nbsp;</Col>
          </Row>

          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={HomeContent}/>
                <Route path="/stepper/:step" component={ExampleStepper} />
                <Route path="/stepper" render={() => <Redirect to="/stepper/0"/>}/>
                <Route path="/notFound" component={NotFound} />
                <Redirect to="/notFound"/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // foo: state.foo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // foo: () => dispatch(foo()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))