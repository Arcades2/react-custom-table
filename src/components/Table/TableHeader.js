import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      visible: PropTypes.bool,
    }),
  ).isRequired,
  optionnals: PropTypes.object.isRequired,
};

class TableHeader extends Component {
  renderHeaders() {
    const { headers, optionnals } = this.props;
    return headers.map(
      h => (optionnals[h.key] === undefined || optionnals[h.key].visible !== false ? (
          <td key={h.name}>{h.name}</td>
      ) : (
        false
      )),
    );
  }

  render() {
    return (
      <thead>
        <tr>{this.renderHeaders()}</tr>
      </thead>
    );
  }
}

TableHeader.propTypes = propTypes;

export default TableHeader;
