import React from 'react';
import { ProductConsumer } from '../../context.js/context';
import LogIn from '../auth/SignIn';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "../Button";
import AccountUserNav from './UserSAccountnav';
import styled from 'styled-components';
import { UserConsumer, UserProvider } from '../../context.js/UserContext';

export default class UserModal extends React.Component {
    
    render() {
        return (
            <ModalWrap className='modal_container'>

            <ProductConsumer>
               {(value) => (
                   
                    
                    <UserProvider>
                        <UserConsumer>
                            {(usercon) => {
                                const { user} = usercon;
                            

                        if(!value.modalOpen){
                            return null;
                        } else
                         if (user) {
    
                            return (
                              
                                <div id='modal' style={{position:'absolute', maxWidth: '320px', minWidth:'125px', border: '0.05px solid #ccc', right:'80px', zIndex:'3000', top:'128px', backgroundColor:'white'}}>
                                   <AccountUserNav/>
                                </div>
                            );
                            } else {
                                return (
    
                                    <div onMouseLeave={()=>value.closeModal()}id='modal'style={{position: 'absolute',backgroundColor:'white', top:'50%', right:'50%', width:'25%', minWidth:'300px', transform:'translate(50%, -50%)', maxHeight: '350px', border: '0.05px solid #ccc', padding: '5px 10px', fontSize:'.8em', zIndex:'3005'}}>
                                        <LogIn />
                                        
                                    </div>
                                );
                                }
    
                          }
                            }
                        </UserConsumer>
                    </UserProvider>
               )
        }
            </ProductConsumer>
            </ModalWrap>
        );

}
}
const ModalWrap = styled.div `
@media (max-width:770px){
    .modal_container{
        display: none;
    }
}
`;