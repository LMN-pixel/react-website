import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export default function ProductList(props) {
    return (
        <List  {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='price' />
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/products'/>

            </Datagrid>
        </List>
    )
}