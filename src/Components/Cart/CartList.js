import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

export default function CartList({value}) {

    const {cart, clearCart} = value;
    console.log(value,cart);


    return (
    <div>
        <div className='container-fluid'>
            {cart.map(item => {
                return (
                <CartItem 
                key={item.id} 
                item={item}
                value={value}
                    />);
            })}
        </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>
                        <Link to='/'>
                            <button 
                                className='btn btn-outline-danger mb-3 px-5'
                                type='button'
                                onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}