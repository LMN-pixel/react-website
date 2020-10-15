import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export class Details extends React.Component {
    render() {

        return (
            <ProductConsumer>
                {(value) => {
                  const {
                    id,
                    company,
                    img,
                    info,
                    price,
                    title,
                    inCart
                } = value.detailProduct;
                   return (
                       <div className='container py-5'>
                           {/*title*/}
                           <div className='row'>
                               <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                   <h1>{title}</h1>
                               </div>
                           </div>
                           {/*title end*/}
                           {/*Productinfo*/}
                           <div className='row'>
                               <div className='col-10 mx-auto col-md-6 
                               my-3'>
                                   <img src={img} className='img-fluid' alt='product' />
                               </div>
                               {/*Product text */}
                               <div className='col-10 mx-auto col-md-6 
                               my-3 text-capitalize'>
                                   <h1>Category: {title}</h1>
                                   <h4 className='text-title text-uppercase 
                                   text-muted mt-3 mb-2'>
                                       Made by: <span className='text-uppercase'>
                                           {company}</span>
                                   </h4>
                                   <h4 className='text-blue'>
                                       <strong>
                                           price: <span>Ksh</span>
                                           {price}
                                       </strong>
                                   </h4>
                                   <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                       About:
                                   </p>
                                   <p className='text-muted lead'>
                                       {info}
                                   </p>
                                   {/*Buttonss*/}
                                   <div>
                                       <Link to='/'>
                                           <ButtonContainer>
                                                Back to products
                                           </ButtonContainer>
                                       </Link>
                                       <ButtonContainer
                                       cart
                                       disabled = {inCart? true : false}
                                       onClick={ () => {
                                           value.addToCart(id);
                                           value.openModal(id);
                                       }}
                                       >
                                           {inCart?'in Cart': 'Add to cart'}
                                       </ButtonContainer>

                                   </div>
                               </div>
                           </div>
                       </div>
                   )
                }}
            </ProductConsumer>
        );
    }
}