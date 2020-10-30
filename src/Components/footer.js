import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component {

    render() {
        return (
            <FooterWrapper>

                    <footer>
                        
                        <div className='row row2 py-2'>
                            <div className='col contact'>
                                <h6>Contact us:</h6>
                                <br></br>
                                <p>Email: filler@email.com</p>
                                <p>Telephone: +254 123 456</p>
                                <p> Nairobi, Kenya </p>
                            </div>
                            <div className='col'>
                                <h6>Follow us on:</h6>
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