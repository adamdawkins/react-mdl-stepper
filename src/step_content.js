import React from 'react';
import StepBorder from './step_border';

class StepContent extends React.Component {
  getDimensions() {
    const { container } = this.refs;
    let width = 0;
    let height = 0;
    if (container) {
      width = container.clientWidth;
      height = container.clientHeight;
    }

    return { width, height };
  }
  render() {
    const { children, isLastChild } = this.props;
    return (
      <div className="mdl-step__content" ref="container">
      {!isLastChild ? (<StepBorder />) : null}
        {children}
      </div>
    );
  }
}

export default StepContent;
