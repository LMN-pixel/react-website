import React from 'react';
import OrderItem from './UserOrderItem';

export default function OrderList(value){

    const { orders } = value
    

        return (
            

            <div style={{marginTop:'150px'}}>
                
                    <h6 style={{textAlign:'center', textTransform:'uppercase'}}>Orders</h6>

                    <div className='container-fluid' style={{ border: '0.05px solid #ccc', borderRadius:'10px'}}>
                         {orders.map(item => {
                                 return (
                                     <OrderItem 
                                     key={item.id}
                                     item={item}
                                     value={value}/>
                                 );
                             }
                         )}
                        

                    </div>
                
            </div>
            
        );
    
}