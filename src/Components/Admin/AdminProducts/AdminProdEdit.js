import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export default function ProductEdit(props){
        return(
            <Edit title='Edit product' {...props}>
                <SimpleForm>
                    <TextInput disabled source='id'/>
                    <TextInput source='title'/>
                    <TextInput source='price'/>
                    <TextInput source='category'/>
                    <TextInput source='color'/>
                    <TextInput source='company'/>
                    <TextInput multiline source='info'/>
                    <TextInput source='count'/>
                    <TextInput source='total'/>
                    
                </SimpleForm>
            </Edit>
    
        )
    }

