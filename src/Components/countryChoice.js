import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context.js/context';


export default class CountrySelect extends React.Component {
  
    render() {
        return (
           <CountryWrap>
               <ProductConsumer>
                   {(value) => (
                    <select style={{border:'none', backgroundColor:'white'}} onChange={(e) => {value.changeCurrency(e)}}>
                        <option value='Ksh'> KES</option>
                        <option value='Tzs'> TZS</option>
                        <option value='Ugx'> UGX</option>
                    </select>

                   )}
               </ProductConsumer>
           </CountryWrap>
          
        );
    }
}

const CountryWrap = styled.div `
@media (min-width:1200px){
    position: absolute;
   top: 35px;
    right:10px;
    border: none;
    font-size: .8em;
}
`;





