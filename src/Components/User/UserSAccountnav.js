import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context.js/context';

export default class AccountUserNav extends React.Component {

    render() {

        return (
            <ProductConsumer>
                {(value) => (

            <nav 
            onClick={()=>value.closeModal()}
            onMouseLeave={()=>value.closeModal()}
            >
                <ul style={{listStyle:'none', backgroundColor:'white', padding:'0 10px'}}>
                    <li style={{borderBottom:' 0.05px solid #ccc',marginRight: '5px', fontSize: '.8em', lineHeight:'50px'}}>
                        <Link to='/account'>My Account</Link>  
                    </li>
                    <li style={{borderBottom:' 0.05px solid #ccc',marginRight: '5px', fontSize: '.8em', lineHeight:'50px'}}>
                        <Link to='/orders'>Orders</Link> 
                    </li> 
                    <li style={{marginRight: '5px', fontSize: '.8em', lineHeight:'50px'}}> 
                        <Link to='/'>Logout</Link>
                    </li>
                </ul>
            </nav>
                )}

            </ProductConsumer>

        );
    }
}