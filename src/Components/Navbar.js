import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './Searchbar';
import CountrySelect from './countryChoice';
import {ProductConsumer} from '../context';

export class Navbar extends React.Component {
  
    render() {
        

        return (
            <NavWrapper>
                <ProductConsumer>
                {value => (
                <header className='page_header'>
                
                <div className='container mb-0'>
                    <div className='row row1 navbar-header'>
                        <div className='d-none d-xl-inline-block'>

                       <CountrySelect className='dis'/>
                        </div>
                        
                            <Link to='/'>
                                <img
                                className='logo'
                                src='img/logo.jpg' 
                                alt = ' '
                                />
                            </Link>
                            <ul>
                                <li className = 'd-none d-xl-inline-block'>
                                    <SearchBar/>
                                </li>
                                
                                <li>
                                    <Link to='/signup' className='link'>            
                                        <span>
                                            <i className='far fa-user-circle fa-fw'/>
                                        </span>
                                        <span className='dis'>
                                        Sign In
                                        </span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/wishlist' className='link'>
                                        <span>
                                            <i className='far fa-heart'></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart" className='link mr-3 position-relative'>
                                                <i className="fas fa-shopping-basket fa-fw"/>
                                                
                                            
                                            <span className='cart-basket d-flex align-items-center justify-content-center'>
                                            
                                            {value.cart.length}                                                                                         
                                                                                                                                                                                           
                                          </span>
                                            
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <nav>   
                        <div className='container'>   
                            <div className='row row2 flex-nowrap'>
                            <input type="checkbox" id="check"/>
		                            <label for="check" className="checkbtn ml-3">
		                                <i className="fas fa-bars"></i>
		                            </label>
                                    
                                <ul className='side_nav_st navlist navbar navbar-expand-md col-12 bg-inverse nav navbar-nav'>
                                    <li className='d-block d-md-none w-100'>

                                        <CountrySelect/>
                                    </li>
                                    <li id='side' className='d-block d-md-none w-100'>
                                        <SearchBar/>

                                    </li>
                                        <li 
                                        id='side' 
                                         
                                        onClick={(e) => { value.changeCategory(e); }}
                                        className='nav-item link'
                                          >
                                            <Link to='/products'>
                                                All bags
                                                </Link></li>
                                        <li 
                                        id='side'
                                        
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                        <Link to='/products' category='New Arrivals'>New Arrivals</Link></li>
                                        <li 
                                        id='side'
                                         
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'
                                        >
                                            <Link to='/products'>Crossbody Bags
                                                </Link></li>
                                        <li 
                                        id='side'
                                         
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Handbags
                                                </Link></li>
                                        <li 
                                        id='side'
                                        
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Shoulder Bags
                                                </Link></li>
                                        <li 
                                        id='side'
                                        
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Tote Bags
                                                </Link></li>
                                        <li 
                                        id='side'
                                       
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Mini Bags
                                                </Link></li>
                                        <li 
                                        id='side'
                                         
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Clutches
                                                </Link></li>
                                        <li 
                                        id='side'
                                         
                                        onClick={(e) => { value.changeCategory(e); }} 
                                        className='nav-item link'>
                                            <Link to='/products'>Bucket Bags
                                                </Link></li>
                                    </ul>
                                   
                            </div> 
                        </div> 
                       
                    </nav>
                                     
                     </header>
                )}         
                 </ProductConsumer>   
                </NavWrapper>
            
        );
    }
}

const NavWrapper = styled.nav `
.page_header{
    position: absolute !important;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1020;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
    background-color: #fff;
    font-size: 14px;
}
header {
    display: block;
}
div {
    display: block;
}
.row{
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.row1 {
padding: 0;
margin: 0;
box-sizing: border-box;
display: block;
width: 100%;
height: auto;
background: white;
color: black;
}


.row1 ul {
    
    float: right;
    margin-right: 0;
    text-decoration: none;
    list-style-type: none;
}

.row1 ul li {
    display: inline-block;
    line-height: 70px;
    margin: 0 4px;

}

ul li .cart-basket {
    font-size: .6rem;
    position: absolute;
    top: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    color: black;
    background-color: #f0f0f0;
    border-radius: 50%;
}
.logo {
    position: absolute;
    left:0;
    top: 0;
    margin: 0 auto;
    height: 80px;
}

}

.link {
    color: black;
    padding: 7px 7px;
    display: inline-flex;
}

.link:hover {
    padding: 6px 9px;
    transition: .5s
    
}

.checkbtn {
    position: absolute;
    font-size: 20px;
    top: 0;
    left: 2px;
    margin-right: 10px;
    color: black;
    line-height: 80px;
    cursor: pointer;
    display: none;
}

.navbar-expand-md {
    justify-content: center !important;
}


.row2 {
    width: 100%;
    display: block;
    height: auto;
    margin: 0 auto 5px auto;
    }
    
    .row2 ul {
        list-style-type: none;
        text-decoration: none;
    }
    .row2 ul li{
        display: inline-block;
        margin: 0 1em;
        font-size: .9em;
    }
    
.nav-item {
    color: black;
}
#check{
    display: none;
}

@media (min-width: 721px) {
    .page_header {
        border-bottom: 0;
    }
}
@media (min-width: 1200px) {
    .container {
        max-width: 1250px;
    }
    .logo {
        position: absolute;
        left:0;
        top: 0;
        margin: 0 auto 0 15%;
        
    }
  
}
@media (max-width: 500px) {
    .logo {
        height: 50px;

    }
}

@media (max-width: 952px){
    .logo{
        font-size: 30px;
        height: 70px;
        padding-left: 50px;
    }

    .link {
        font-size: 12px;
    }
}


@media (max-width: 770px){
    .checkbtn{
        display: block;
    }

    .dis {
        display: none;
    }
    .link {
        padding: 0;
        font-size: .9em;
    }
    .bg-inverse{
        background-color: #f3f3f3 !important;
    }

    .row2 ul {
        position: absolute;
        text-decoration: none;
        list-style-type: none;
        z-index: 1;
        width: 75%;
        background-color: black;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
        overflow: auto;
    }

    

    .row2 ul li{
        display: block;
        width: 50%;
        margin: 10px auto;
        line-height: 30px;
        padding-bottom: 5px;
        border-bottom: 0.005px solid black;
        
        
    }
    
    .nav-item{
        font-size: 18px !important;
    }
    

    row2 ul li:hover, {
        background: #333;
        
    }
    
    

    #check:checked ~ ul{
        left:0;
    }
    

    
}

`;