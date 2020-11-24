import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function OrderEdit(props){
        return(
            <Edit title='Edit order' {...props}>
                <SimpleForm>
                    <TextInput disabled source='id'/>
                    <TextInput  source='cartTotal'/>
                    <TextInput  source='email'/>
                   
                    
                </SimpleForm>
            </Edit>
    
        )
    }