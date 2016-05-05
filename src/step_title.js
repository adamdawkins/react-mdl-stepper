
import React from 'react';

class StepTitle extends React.Component {
  render() {
    const { text, message } = this.props;
    return (
      <span className="mdl-step__title">
        <span className="mdl-step__title-text">{text}</span>
        { message ?  ( <span className="mdl-step__title-message">{message}</span>) : null } 
      </span>
    );
  }
}

export default StepTitle;
