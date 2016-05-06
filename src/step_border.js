import React from 'react';

class StepBorder extends React.Component {
  render() {
    const { defaultStyle } = this.props;
    const styles = { ...defaultStyle };
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    top: '45px',
    margin: '0 4px 0 37px',
    height: '95%',
  },
};

StepBorder.propTypes = {
  defaultStyle: React.PropTypes.object,
};

export default StepBorder;
