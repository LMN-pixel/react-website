import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default function OrderItem() {
    


    return(
        <OrderWrapper>
            

            <div className='row'>
                <div className='col-4 col-lg-2'>
                    <img src='img/product.jpg' alt=''/>
                </div>
                <div className='col-4 col-lg-6 order_text'>
                    <div>
                        <p>Gucci-brown</p>
                    </div>
                    <div className='text-muted order_text'>
                        <p>Id id</p>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div style={{fontSize:'.5em', textTransform:'uppercase', backgroundColor:'green', paddingTop:'2px', width:'fit-content', margin:'.5%', fontWeight:'bold', marginTop:'2px'}}>
                        delivered
                    </div>
                    <div>
                    {/*if delivered*/}
                    delivery date

                    </div>
                </div>
            </div>
         


        </OrderWrapper>
    )
}


const OrderWrapper = styled.div `
border-bottom: 0.05px solid #ccc;
padding: 2%;

img {
    max-width: 75px;
}
@media (max-width: 720px){
.order_text {
    margin-right: 5px;
}

}
`;