import React from 'react';
import WishList from './WishlistColumns';
import {ProductConsumer} from '../../context';
import {wishlistData} from './WishlistData';
import WishlistItem from './WishlistItem';
import styled from 'styled-components';


export class Cart extends React.Component {
    render() {

        return (
            
                <ProductConsumer>
                                <React.Fragment>
                                    
                                    <div className='d-block mt-3 pt-5'>
                                    
                                    <CartWrapper>
                                    <div className='container-fluid container_center_desktop cart cart-page shopping_cart'>
                                        <div className='table_product'>
                                            <WishList />
                                            <WishlistItem value={value}/>
                                        </div>
                                    </div>
                                    </CartWrapper>
                                    
                                    </div>
                                </React.Fragment>  
                            );
                       
                    
                </ProductConsumer>
                
         
        );
    }
}

const CartWrapper = styled.div `
position: relative;
min-height: 100%;
margin-bottom:20px;
overflow: auto;


.shopping_cart {
    padding: 0 20px;
}

@media (min-width: 1366px){
.shopping_cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 0 40px;
}
.container_center_desktop {
    max-width: 1220px;
    margin-bottom: 0;
    padding: 0;
}
.table_product{
    float: left;
    width: 807px;
    margin-right: 20px;
}
}
`;