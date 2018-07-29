import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  optionnals: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

class OptionnalColumns extends Component {
  renderOpt() {
    const { optionnals, handleChange } = this.props;
    const keys = Object.keys(optionnals);

    return keys.map(k => (
      <div key={k} style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" checked={optionnals[k].visible} onChange={() => handleChange(k)} />
        <p>{optionnals[k].name}</p>
      </div>
    ));
  }

  render() {
    return <div style={{ width: '100px' }}>{this.renderOpt()}</div>;
  }
}

OptionnalColumns.propTypes = propTypes;

export default OptionnalColumns;
