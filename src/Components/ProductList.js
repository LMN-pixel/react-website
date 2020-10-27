import React from 'react';
import {Product} from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import styled from 'styled-components';

export class ProductList extends React.Component {
    render() {
  
        return (
            <React.Fragment>
                <div className="py-5 my-5">
                    <div className="container">
                        <Titlebackground>
                            <div>
                                <Title name=''title="Shop"/>
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
margin: auto;
max-height: 250px;
@media (max-width: 770px){
    h3 {
        margin-top: 0!important;
        padding-top: 0!important;
        padding-bottom: 5px !important;
        font-size: 1.5rem;
        line-height: 40px;
    }
    
}
`;