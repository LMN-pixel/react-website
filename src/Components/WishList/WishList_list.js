import React from 'react';
import WishlistItem from './WishlistItem';
import {Link} from 'react-router-dom';
import { ButtonContainer } from '../Button';

export default function WishList_list({value}) {

    const {cart, clearCart} = value;
    


    return (
    <div>
        <div className='container-fluid w-100'>
            {cart.map(item => {
                return (
                <WishlistItem 
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
                            <ButtonContainer 
                                
                                type='button'
                                onClick={() => clearCart()}
                            >
                                clear
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}