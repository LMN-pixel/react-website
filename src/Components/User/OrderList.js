import React from 'react';
import SideBar from './Accountsidemenu';
import OrderItem from './UserOrderItem';

export default class OrderList extends React.Component{

    render() {

        return (
            <div style={{marginTop:'150px'}}>
                
                    <h6 style={{textAlign:'center', textTransform:'uppercase'}}>Orders</h6>

                    <div className='container-fluid' style={{ border: '0.05px solid #ccc', borderRadius:'10px'}}>
                        
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />

                    </div>
                
            </div>
        );
    }
}