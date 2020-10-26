import React from 'react';
import styled from 'styled-components';

export default function EmptyCart() {
    return (
        <EmptyWrapper>
        <div className = 'container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto mt-5 mb-5 text-center cart-text'>
                    <h2 className='mt-5 pt-5 mb-5'>your cart is currently empty</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
        </EmptyWrapper>
    )
}
const EmptyWrapper = styled.div `
margin-bottom: 20%;
`;
