import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component {

    render() {
        return (
            <FooterWrapper>

                    <footer>
                        
                        <div className='row row2'>
                            <div className='col contact'>
                                <h5>Contact us:</h5>
                                <br></br>
                                <p>Email: filler@email.com</p>
                                <p>Telephone: +254 123 456</p>
                                <p> Nairobi, Kenya </p>
                            </div>
                            <div className='col'>
                                <h5>Follow us on:</h5>
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>

                    </footer>
                
            </FooterWrapper>
        );
    }
} 

const FooterWrapper = styled.div `

position: relative;
bottom:0;
margin-top:auto;
width: 100%;
color: white;
font-size: .7em;

.row{
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.row2 {
    background: #222;
}

.col {
   
    width: 12em;
    margin: 2% auto;
    
}

.contact {
    margin-left: 5%;
    line-height: 60%;
}

i {
    color: white;
    font-size: 2em;
    margin: 1% 3%;
    align-items: center;
}
`;