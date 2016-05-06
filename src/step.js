import React, { PropTypes } from 'react';
import StepLabel from './step_label';
import StepTitle from './step_title';
import classNames from 'classnames';
import StepContent from './step_content';
import StepActions from './step_actions';

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      skipped: false,
    };

    this.completeStep = this.completeStep.bind(this);
    this.skipStep = this.skipStep.bind(this);
  }

  getMessage() {
    const { summary, completedSummary, skippedSummary } = this.props;
    let message = summary;
    if (completedSummary && this.state.completed) {
      message = completedSummary;
    } else if (skippedSummary && this.state.skipped) {
      message = skippedSummary;
    }

    return message;
  }

  classNames() {
    return classNames(
      'mdl-step',
      {
        'mdl-step--editable': this.props.editable,
        'mdl-step--optional': this.props.optional,
        'mdl-step--completed': this.state.completed,
        'is-active': this.props.isActive,
      }
    );
  }

  completeStep() {
    this.setState({ completed: true });
    this.props.onNext();
  }

  skipStep() {
    this.setState({ skipped: true });
    this.props.onNext();
  }

  handleClick(event) {
    const { isActive, editable, count, setStep } = this.props;
    if (!isActive && editable) {
      event.preventDefault();

      /* return to this editable step */
      setStep(count);
    } else if (event.target.dataset.stepperNext) {
      event.preventDefault();

      this.completeStep();
    } else if (event.target.dataset.stepperSkip) {
      event.preventDefault();

      this.skipStep();
    }
  }
  render() {
    const { children, title, count } = this.props;
    return (
      <li className={this.classNames()} onClick={this.handleClick.bind(this)}>
        <StepLabel
          stepNumber={count}
          completed={this.state.completed}
          editable={this.props.editable}
          active={this.props.isActive}
        >
          <StepTitle text={title} message={this.getMessage()} />
        </StepLabel>
        {children}
      </li>
    );
  }
}

Step.propTypes = {
  editable: PropTypes.bool,
  optional: PropTypes.bool,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  completedSummary: PropTypes.string,
  skippedSummary: PropTypes.string,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  setStep: PropTypes.func,
  onNext: PropTypes.func.isRequired,
  children(props, propName) {
    const children = props[propName];

    React.Children.forEach(children, (child) => {
      if ((child.type !== StepActions) || (child.type !== StepContent)) {
        throw new Error(
          ```
            Expected \`StepContent\` or \`StepActions\` 
            but found \`${child.type.displayName || child.type}\`
          ```
        );
      }
      return;
    });
  },
};

export default Step;
