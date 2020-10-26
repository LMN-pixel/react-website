import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export class Cart extends React.Component {
    render() {

        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return (
                                <React.Fragment>
                                    <div className='mt-5 pt-5'>
                                    <Title name='your' title='Shopping basket' />
                                    </div>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value} />
                                </React.Fragment>  
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
                
            </section>
        );
    }
}