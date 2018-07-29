import React from 'react';
import Table from '../components/Table';
import chantiersHeaders from '../tables/chantier.json';
import chantiersData from '../data/chantier.json';
import ChantierTableRow from '../components/Chantier/ChantierTableRow';

const Homepage = () => (
  <div>
    <Table headers={chantiersHeaders} data={chantiersData} row={ChantierTableRow} />
  </div>
);

export default Homepage;
