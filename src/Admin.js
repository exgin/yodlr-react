import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Loader, Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

function Admin() {
  const { isLoading, error, data } = useQuery('fetchUsers', () => axios('http://localhost:3001/users'));

  return (
    <div>
      <h2>All users</h2>
      {error && <div>...trying to load data something went wrong</div>}
      {isLoading ? (
        <Loader size='lg' content='...loading' />
      ) : (
        <Table virtualized height={400} data={data.data}>
          <Column width={70} align='center' fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey='id' />
          </Column>

          <Column width={130}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey='firstName' />
          </Column>

          <Column width={130}>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey='lastName' />
          </Column>

          <Column width={200}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey='email' />
          </Column>

          <Column width={200}>
            <HeaderCell>State</HeaderCell>
            <Cell dataKey='state' />
          </Column>
        </Table>
      )}
    </div>
  );
}

export default Admin;
