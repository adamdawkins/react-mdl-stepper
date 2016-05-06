import React, { cloneElement } from 'react';
import Step from './step';
class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    };
    this.nextStep = this.nextStep.bind(this);
    this.setStep = this.setStep.bind(this);
  }
  getStepsCount() {
    return this.props.children && this.props.children[0] ?
      React.Children.count(this.props.children) : 0;
  }

  getChildren() {
    let count = 0;
    const { children } = this.props;
    const state = this.state;
    return React.Children.map(children, (step) => {
      count++;

      const id = `step-${count}`; // TODO: make unique?
      const ref = id;
      const isActive = state.activeStep === count;
      const onNext = this.nextStep;
      const setStep = this.setStep;

      return cloneElement(step, {
        count,
        ref,
        id,
        isActive,
        onNext,
        setStep,
      });
    });
  }
  setStep(stepNumber) {
    this.setState({ activeStep: stepNumber });
  }
  nextStep() {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  }
  render() {
    return (
      <ul className="mdl-stepper mdl-stepper--linear">
        {this.getChildren()}
      </ul>
    );
  }
}

Stepper.propTypes = {
  children(props, propName) {
    const children = props[propName];
    React.Children.forEach(children, (child) => {
      if (child.type !== Step) {
        throw new Error(
          `Expected \`Step\` but found \`${(child.type.displayName || child.type)}\``
        );
      }
      return;
    });
  },
};

module.exports = Stepper;
