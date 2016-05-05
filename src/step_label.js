import React from 'react';

class StepLabel extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <span className="mdl-step__label">
        {children}
    <span className="mdl-step__label-indicator"><i className="material-icons mdl-step__label-indicator-content">check</i></span>
      </span>
    );
  }
}

export default StepLabel;
