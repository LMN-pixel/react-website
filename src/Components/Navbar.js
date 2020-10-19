import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';



export class Navbar extends React.Component {
    render(){

        return (
            <div>
            <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
                <ul className="navbar-nav align-items-baseline">
                    <li className="nav-item mr-5 ml-0">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/'>
                    <img
                    className=' logo'
                    src='img/logo.jpg' 
                    />
                </Link>
                <Link to="./cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            <hr></hr>
            <Slideshow>
                <div className='header'>
                    <p>Shop Now!</p>
                </div>
            </Slideshow>
            </div>
        );
    }
}

const NavWrapper = styled.nav`

background: var(--mainWhite);
width: 100%;
margin-top: 0;
margin-bottom: 0;
padding: 0;
z-index: 1;
height: 10%;

.nav-link{
    color: var(--mainBlue) !important;
    font-size : 1.3rem;
    text-transform: capitalize;

}

.logo {
    width: 20%;
    height: auto;
    align-items: center;
    margin-left: 60%; 
    
}
`;

const Slideshow = styled.div `
.header {
    position: relative;
    background: url(img/landing.jpg);
    width: 100%;
    max-height: 500px;
    background-repeat: none;
    background-size: contain;

}

.header p {
    position: absolute;
    text-align: center;
    color: white;
    font-size: 300%;

}
`;


/*return (
    <NavWrapper className='navbar'>
        <Link to='/' className='nav-link'>
            Products
        </Link>
        <Link to='/'>
            <div id='logo'>
            
            </div>
        </Link>
        <Link to='./cart' className='nav-link'>
            <ButtonContainer>
                <i className='fas fa-cart-plus'/>
            </ButtonContainer>
        </Link>
    </NavWrapper>
);
    }
}
    

const NavWrapper = styled.nav `
display: flex;
width: 100%;
height: 20%; 
background: white;
align-items: center;


.nav-link {
    margin: 0 40px;
}



#logo {
    width: 200px;
    height: 100%;
    background: url(img/logo.jpg);
   
    

}
`;
*/