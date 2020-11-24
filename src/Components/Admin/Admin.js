import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './AdminProducts/AdminProdList';
import ProductCreate from './AdminProducts/AdminProdCreate';
import ProductEdit from './AdminProducts/AdminProdEdit';
import UserList from './AdminUsers/AdminUserList';
import OrderList from './AdminOrders/AdminOrderList';
import OrderEdit from './AdminOrders/AdminOrderEdit';


 export default function AdminPage () {
   return (

    <Admin dataProvider = {jsonServerProvider('http://localhost:3000')}>
        <Resource name='orders' list={OrderList}  edit={OrderEdit} />
        <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} />
        <Resource name='users' list={UserList}/>
        
    </Admin>
   )
}
