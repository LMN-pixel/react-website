import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export default function OrderList(props) {
    return (
        <List  {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='firstName'/>
                <TextField source='phoneNumber'/>
                <TextField source='cartTotal'/>
                <TextField source='cart'/>
                <TextField multiline source='address'/>
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/products'/>
            </Datagrid>
        </List>
    )
}