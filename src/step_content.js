
import React from 'react';

class StepContent extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="mdl-step__content">
        {children}
      </div>
    );
  }
}

export default StepContent;
