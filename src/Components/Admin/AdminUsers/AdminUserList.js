import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export default function UserList(props) {
    return (
        <List  {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='firstname' />
                <TextField source='lastname' />
                <TextField source='email' />
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/products'/>
            </Datagrid>
        </List>
    )
}