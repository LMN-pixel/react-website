import React from 'react';
import {Product} from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import styled from 'styled-components';

export class ProductList extends React.Component {
    render() {
  
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Titlebackground>
                            <div>
                                <Title name="our" title="products"/>
                            </div>
                        </Titlebackground>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>;
                                    });
                                
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
              // <Product />
        
        );
    }
}

const Titlebackground = styled.div `
background: url(img/wallpaper.jpg);
width: 50%;
margin: 2% auto;
max-height: 500px;
`;