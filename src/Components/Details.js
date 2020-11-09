import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Carousel from 'react-carousel-with-thumbnail';

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
                    color,
                    price,
                    title,
                    inCart,
                    inWishlist
                } = value.detailProduct;
                   return (
                       <div className='container py-5'>
                           {/*title*/}
                           <div className='row'>
                               <div className='col-10 mx-auto text-center text-title text-slanted text-blue my-5'>
                                   <h2>{title}</h2>
                               </div>
                           </div>
                           {/*title end*/}
                           {/*Productinfo*/}
                           <div className='row'>
                               <div className='col-12 mx-auto col-md-7 
                               my-3'>
                                   <Carousel style={{maxHeight:'300px'}}>
                                       <img src={img[0]} alt=''/>
                                       <img src={img[1]} alt=''/>
                                       <img src={img[2]} alt=''/>
                                       <img src={img[3]} alt=''/>
                                   </Carousel>
                                   
                               </div>
                               {/*Product text */}
                               <div className='col-10 mx-auto col-md-4 
                               my-3 text-capitalize'>
                                   <h6>{title}</h6>
                                   <p className='text-muted mt-3 mb-2'>
                                       Brand: <span>
                                           {company}</span>
                                   </p>
                                   <p style={{fontSize:'.9em'}}>
                                        <span>
                                            Ksh {price}
                                           </span>
                                   </p>
                                   <button 
                                        style={{border:'none', float:'right', background:'white'}}
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
                                   <p style={{fontSize:'.9em'}}>
                                       Color: <strong>{color}</strong>
                                   </p>
                                   <p className='text-capitalize font-weight-bold mt-3 mb-0'style={{fontSize:'.9em'}} >
                                       DESCRIPTION:
                                   </p>
                                   <p className='text-muted lead'style={{fontSize:'.9em'}}>
                                       {info}
                                   </p>
                                   {/*Buttonss*/}
                                   <div>
                                       <Link to='/products'>
                                           <ButtonContainer style={{fontSize:'.9em'}}>
                                                Back to products
                                           </ButtonContainer>
                                       </Link>
                                       <ButtonContainer style={{fontSize:'.9em'}}
                                       cart
                                       disabled = {inCart? true : false}
                                       onClick={ () => {
                                           value.addToCart(id);
                                           
                                       }}
                                       >
                                           {inCart?'Added to Cart': 'Add to cart'}
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