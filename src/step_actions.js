
import React from 'react';

class StepActions extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="mdl-step__actions">
        {children}
      </div>
    );
  }
}

export default StepActions;
