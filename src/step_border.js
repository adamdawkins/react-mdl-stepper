import React from 'react';

class StepBorder extends React.Component {
  render() {
    const { defaultStyle, contentHeight } = this.props;
    const height = contentHeight + 48 + 28 + 24 + 15;
    const styles = { ...defaultStyle, height };
    return (

      <div style={styles}></div>
    );
  }
}

StepBorder.defaultProps = {
  defaultStyle: {
    position: 'absolute',
    left: 0,
    width: '1px',
    backgroundColor: 'rgba(0,0,0,.1)',
    margin: '-25px 4px 0 37px',
  },
};

StepBorder.propTypes = {
  defaultStyle: React.PropTypes.object,
};

export default StepBorder;
