import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export class Product extends React.Component {

    render() {

        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-2'>
                <div className='card'>
                    <ProductConsumer>
                        {(value) => (
                      <div 
                      className='image-container p-2' 
                      onClick={() => {
                        value.handleDetail(id);
                      }}>

                          <Link to='/details'>
                              <img src={img} alt='product' className='card-img-top' />
                          </Link>

                          <button 
                            className='cart-btn' 
                            disabled={inCart ? true : false} 
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }} >

                            {inCart ? (
                               <p className='text-capitalize mb-0 cart-text' disabled>
                                  {' '}
                                  Added to cart!</p>
                                  ) : (
                               <i className='fas fa-cart-plus' />
                               )}

                          </button>
                      </div>)}
                    </ProductConsumer>

                    {/*card footer*/}
                    <div className='card-footer'>
                        <p className='mb-2'>
                            {title}
                        </p>
                        <p className='font-italic mb-0'>
                            <span className='mr-1'>
                                Ksh
                            </span>
                            {price}
                        </p>
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
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div `
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    text-align: center;
    transition: all 0.5s linear;
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
.image-container:hover .cart-btn {
    transform: translate(0,0);
    transition: all 0.5s linear;
}
.cart-btn:hover {
    color: black;
    cursor: pointer;
}

@media (min-width: 1366px)

.card-img-top {
    min-height: 378px;
}
`;