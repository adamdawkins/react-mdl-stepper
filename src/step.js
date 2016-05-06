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
    };
  }
  classNames() {
    return classNames(
      'mdl-step',
      {
        'mdl-step--completed': this.state.completed,
        'is-active': this.props.isActive,
      }
    );
  }
  handleClick(event) {
    const { onNext } = this.props;
    if (event.target.dataset.stepperNext) {
      event.preventDefault();
      this.setState({ completed: true });
      onNext();
    }
  }
  render() {
    const { children, title, summary, count } = this.props;
    return (
      <li className={this.classNames()} onClick={this.handleClick.bind(this)}>
        <StepLabel stepNumber={count} completed={this.state.completed} active={this.props.isActive}>
          <StepTitle text={title} message={summary} />
        </StepLabel>
        {children}
      </li>
    );
  }
}

Step.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  count: PropTypes.number,
  isActive: PropTypes.bool,
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
