import React, { PropTypes } from 'react';

class StepLabel extends React.Component {
  getLabelIndicator() {
    const { completed, editable, stepNumber } = this.props;
    let indicator = (<span className="mdl-step__label-indicator-content">{stepNumber}</span>);

    if (completed) {
      const icon = editable ? 'edit' : 'check';

      indicator = (<i className="material-icons mdl-step__label-indicator-content">{icon}</i>);
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

StepLabel.propTypes = {
  editable: PropTypes.bool,
  completed: PropTypes.bool,
  stepNumber: PropTypes.number.isRequired,
  children: PropTypes.object,
};


export default StepLabel;
