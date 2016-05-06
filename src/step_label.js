import React from 'react';

class StepLabel extends React.Component {
  getLabelIndicator() {
    const { completed, stepNumber } = this.props;
    let indicator = (<span className="mdl-step__label-indicator-content">{stepNumber}</span>);

    if (completed) {
      indicator = (<i className="material-icons mdl-step__label-indicator-content">check</i>);
    }

    return (
    <span className="mdl-step__label-indicator">
      {indicator}
    </span>
    );
  }
  render() {
    const { children } = this.props;
    return (
      <span className="mdl-step__label">
        {children}
        {this.getLabelIndicator()}
      </span>

    );
  }
}

export default StepLabel;
