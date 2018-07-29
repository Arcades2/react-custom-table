import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    priceTTC: PropTypes.number.isRequired,
    priceHT: PropTypes.number.isRequired,
    tva: PropTypes.number.isRequired,
  }).isRequired,
  optionnals: PropTypes.object.isRequired,
};

const ChantierTableRow = (props) => {
  const {
    name, desc, client, priceTTC, priceHT, tva,
  } = props.data;
  const { optionnals } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{client.name}</td>
      <td>{priceTTC}€</td>
      {optionnals.priceHT.visible && <td>{priceHT}€</td>}
      {optionnals.tva.visible && <td>{tva}%</td>}
    </tr>
  );
};

ChantierTableRow.propTypes = propTypes;

export default ChantierTableRow;
