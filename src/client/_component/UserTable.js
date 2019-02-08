import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'password',
    text: 'Product Price'
}];

export const UserTable = (userList) => {
    var { userList } = userList;
    return (<BootstrapTable keyField='id' data={userList} columns={columns} />)
};