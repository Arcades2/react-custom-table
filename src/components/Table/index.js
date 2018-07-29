import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import OptionnalColumns from './OptionnalColumns';

const propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      visible: PropTypes.bool,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  row: PropTypes.func.isRequired,
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionnals: {},
    };
    this.handleOptColumnChange = this.handleOptColumnChange.bind(this);
  }

  componentWillMount() {
    const { headers } = this.props;
    headers.forEach((h) => {
      if (h.visible !== undefined) {
        this.setState(prevState => ({
          optionnals: { ...prevState.optionnals, [h.key]: { name: h.name, visible: h.visible } },
        }));
      }
    });
  }

  handleOptColumnChange(key) {
    this.setState(prevState => ({
      optionnals: {
        ...prevState.optionnals,
        [key]: { ...prevState.optionnals[key], visible: !prevState.optionnals[key].visible },
      },
    }));
  }

  render() {
    const { headers, data, row } = this.props;
    const { optionnals } = this.state;

    return (
      <div>
        <OptionnalColumns optionnals={optionnals} handleChange={this.handleOptColumnChange} />
        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          <TableHeader headers={headers} optionnals={optionnals} />
          <TableBody data={data} row={row} optionnals={optionnals} />
        </table>
      </div>
    );
  }
}

Table.propTypes = propTypes;

export default Table;
