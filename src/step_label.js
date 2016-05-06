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
    const { children, active, isLastChild } = this.props;
    return (
      <span className="mdl-step__label">
        {children}
        {this.getLabelIndicator()}
        {!active && !isLastChild ? (
          <div style={{
          position: 'absolute',
          left: 0,
          width: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          margin: '36px 4px 0 37px',
          height: '40px',
          }}> </div>
        ) : null
        }
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
