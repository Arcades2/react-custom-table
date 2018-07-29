import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  row: PropTypes.func.isRequired,
  optionnals: PropTypes.object.isRequired,
};

class TableBody extends Component {
  renderRows() {
    const { data, row, optionnals } = this.props;
    const TableRow = row;

    return data.map(d => <TableRow key={d.id} data={d} optionnals={optionnals} />);
  }

  render() {
    return <tbody>{this.renderRows()}</tbody>;
  }
}

TableBody.propTypes = propTypes;

export default TableBody;
