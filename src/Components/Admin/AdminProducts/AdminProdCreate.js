import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export default function ProductCreate(props) {
    return(
        <Create title='Add a product' {...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput source='price'/>
                <TextInput source='category'/>
                <TextInput source='color'/>
                <TextInput source='company'/>
                <TextInput multiline source='info'/>
                <TextInput source='count'/>
                <TextInput source='total'/>
                
            </SimpleForm>
        </Create>

    )
}