import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component {

    render() {
        return (
            <FooterWrapper>
                <div className='footer'>
                    <footer>
                        <div className='row row1'>
                            <img 
                            src='img/footer-logo.jpg'
                            alt=''
                            className='logo'
                            />
                        </div>
                        
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
                </div>
            </FooterWrapper>
        );
    }
} 

const FooterWrapper = styled.div `

margin-bottom: 0;
color: white;
font-size: .7em;

.row1 {
    background: #333;
    padding-top: 1%;
}

.logo {
    width: 10%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 1%;

}

.row2 {
    background: #222;
}

.col {
   
    width: 80%;
    margin: 2% auto;
    
}

.contact {
    margin-left: 5%;
    line-height: 60%;
}

i {
    color: white;
    font-size: 300%;
    margin: 1% 3%;
    align-items: center;
}
`;