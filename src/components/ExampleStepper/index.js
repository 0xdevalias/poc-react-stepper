import React, {Component} from 'react';
import {connect} from 'react-redux';
import {prevStep, nextStep} from '../../actions/index';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, Progress } from 'reactstrap';
import './ExampleStepper.css'

const steps = [
  {label: "Part 1a", content: <p>I am some content 1!</p> },
  {label: "Part 2b", content: <p>I am some content 2!</p> },
  {label: "Part 3c", content: <p>I am some content 3!</p> },
  {label: "Part 4d", content: <p>I am some content 4!</p>, disabled: true },
  {label: "Part 5d", content: <p>I am some content 5!</p> },
];

class ExampleStepper extends Component {
  renderSegments(steps) {
    console.log(this.props)
    const doneList = this.props.done || [];
    const current = this.props.match.params.step;
    const widthPercent = 100 / steps.length;

    var segments = [];
    for (var i = 0; i < steps.length; i++) {
      var color;
      if (doneList.includes(i)) { color = "done"; }
      else if (i.toString() === current) { color = null; }
      else { color = "todo"; }

      var label;
      if (i === current || steps[i].disabled) {
        label = steps[i].label;
      } else {
        label = (
          <Link to={`./${i}`}>
            {steps[i].label}
          </Link>
        );
      }

      var segment = (
        <Progress bar value={widthPercent} color={color} key={i}>
          {label}
        </Progress>
      );

      segments.push(segment);
    }

    return (
      <Progress multi>
        {segments}
      </Progress>
    )
  }

  hasPrev() {
    return this.props.current-1 >= 0
  }

  hasNext() {
    return !(this.props.current+1 >= steps.length)
  }

  debug() {
    var {match, location, history, ...rest} = this.props

    return (
      <Row>
        <Col>
          Debug: <pre>{JSON.stringify(rest, null, 2)}</pre>
        </Col>
      </Row>
    )
  }

  render() {
    if (this.props.match.params.step !== this.props.current.toString()) {
      return <Redirect to={`/stepper/${this.props.current}`}/>
    }

    return (
      <Container>
        <Row>
          <Col>
            {this.renderSegments(steps)}
          </Col>
        </Row>

        <Row>
          <Col>
            {steps[this.props.current].content}
          </Col>
        </Row>

        <Row>
          <Col>
            {this.hasPrev() && <button onClick={() => this.props.prevStep()}>Prev</button>}
            {this.hasNext() && <button onClick={() => this.props.nextStep()}>Next</button>}
          </Col>
        </Row>

        {this.debug()}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  return {
    current: state.stepper.get("current"),
    done: state.stepper.get("done")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => dispatch(prevStep()),
    nextStep: () => dispatch(nextStep(steps.length)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleStepper)