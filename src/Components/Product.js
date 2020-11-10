import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';




export class Product extends React.Component {

    render() {

        const {id, title, img, price, inCart, inWishlist} = this.props.product;
    

        return (
            <ProductWrapper className='product_card col-6 px-1 col-lg-4 my-2'>
                <div className='card'>
                    <ProductConsumer>
                        {(value) => (
                      <div 
                      className='image-container' 
                      onClick={() => {
                        value.handleDetail(id);
                      }}>

                          <Link to='/details'>
                              <img src={img[0]} alt='product' className='card-img-top' />
                          </Link>

                      {/* wishlist button */}
                            <button 
                                className='wishlist_btn'
                                disabled={inWishlist ? true : false}
                                onClick={() => {
                                    value.addToWishlist(id);
                                       
                                }}>
                                    
                                {inWishlist ? (
                               <i className='fas fa-heart' disabled/>                                 
                                  ) : (
                               <i className='far fa-heart' />
                               )}           
                            </button>                        
                        
                        {/* cart button */}
                          <button 
                            className='cart-btn' 
                            disabled={inCart ? true : false} 
                            onClick={() => {
                                value.addToCart(id); 
                                
                            }} >

                            {inCart ? (
                               <p className='text-capitalize mb-0 cart-text' disabled>
                                  {' '}
                                  Added!</p>                                  
                                  ) : (
                               <i className='fas fa-shopping-basket' />
                               )}

                          </button>
                      </div>)}
                      </ProductConsumer>
                   
                    <div className='card-footer'>
                        <div className=' card_text text-center'>
                        <p className='mb-0'>
                            {title}
                        </p>
                        <p className='mb-0'>
                            <ProductConsumer>
                                {(value) => (
                            <span className='mr-1'>
                                {value.currency}
                            </span>
                                )}
                                
                            </ProductConsumer>
                            {price}
                        </p>
                        </div>
                        
                        
                    </div>
                
                </div>
            
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        inWishlist:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div `

.card{
    border-color: transparent;
    transition: all 0.5s linear;
    border-radius: 0 !important;
}


.card-footer {
    background: transparent;
    border-top: transparent;
    text-align: center;
    font-size: .8em;
    transition: all 0.5s linear;
    
}
.card_text{
    display: inline-block;
}

&:hover {
    .card {
        border : 0.02rem solid rgba(0,0,0,0.6);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    
}

.image-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 0.5s linear;
}
.image-container:hover .card-img-top {
    transform:scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: grey;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
}
.wishlist_btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: grey;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
}
.image-container:hover .cart-btn {
    transform: translate(0,0);
    transition: all 0.5s linear;
}
.image-container:hover .wishlist_btn {
    transform: translate(0,0);
    transition: all 0.5s linear;
}
.cart-btn:hover, .wishlist_btn:hover {
    color: black;
    cursor: pointer;
}

@media (min-width: 1366px)

.card-img-top {
    min-height: 378px;
}

`;