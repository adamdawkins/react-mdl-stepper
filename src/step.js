import React from 'react';
import StepLabel from './step_label';
import StepTitle from './step_title';
import classNames from 'classnames';

class Step extends React.Component {
  classNames() {
    return classNames(
      'mdl-step',
      {
        'is-active': this.props.isActive,
      }
    );
  }
  handleClick(event) {
    const { onNext } = this.props;
    console.log(event.target, event.target.dataset);
    if (event.target.dataset.stepperNext) {
      event.preventDefault();
      console.log('calling on Next');
      onNext();
    }
  }
  render() {
    const { children, title, summary, isActive } = this.props;
    return (
      <li className={this.classNames()} onClick={this.handleClick.bind(this)}>
        <StepLabel>
          <StepTitle text={title} message={summary} />
        </StepLabel>
        {children}
      </li>
    );
  }
}

export default Step;
