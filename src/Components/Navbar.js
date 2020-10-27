import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



export class Navbar extends React.Component {
    render(){

        return (
            <NavWrapper>
                <header className='page_header'>
                <div className='container mb-0'>
                    <div className='row row1 navbar-header'>
                        
                            <Link to='/'>
                                <img
                                className='logo link'
                                src='img/logo.jpg' 
                                alt = ' '
                                />
                            </Link>
                            <ul>
                                <li>
                                    <Link to='/' className='link'>
                                        <span className='dis'>Home</span>
                                    </Link>
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
                                    <Link to="/cart" className='link mr-3'>
                                            <span>
                                                <i className="fas fa-shopping-basket fa-fw"/>
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
                                <ul className=' navlist navbar navbar-expand-md col-12 bg-light nav navbar-nav'>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/'>
                                                All bags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                        <Link to='/products'>New Arrivals</Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Crossbody Bags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Handbags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Shoulder Bags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Tote Bags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Mini Bags
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Clutches
                                                </Link></li>
                                        <li id='side' 
                                        className='nav-item link'>
                                            <Link to='/products'>Bucket Bags
                                                </Link></li>
                                    </ul>
                                
                            </div> 
                        </div> 
                    </nav>    
                </header>         
                </NavWrapper>
            
        );
    }
}

const NavWrapper = styled.nav `
.page_header{
    position: fixed !important;
    top:0;
    width: 100%;
    z-index: 1020;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    font-size: 14px;
}
header {
    display: block;
}
div {
    display: block;
}

.row1 {
padding: 0;
margin: 0;
box-sizing: border-box;
display: block;
width: 100%;
height: 70px;
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

.logo {
    margin-left: 7px;
    padding: 0 100px 5px 0;
    height: 80px;
    
    
}

.link {
    color: black;
    padding: 7px 7px;
    display: inline-flex;
}

.link:hover, .link:click {
    text-decoration: underline;
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
        font-size: 1.5rem;
    }

    .row2 ul {
        position: fixed;
        text-decoration: none;
        list-style-type: none;
        z-index: 1;
        width: 75%;
        height: 100vh;
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
    .logo {
        position: absolute;
        width: 100px;
        margin: 0 auto 0 30%;
    }

    .nav-item{
        font-size: 18px !important;
    }
    

    row2 ul li:hover, row2 ul li:click {
        background: #333;
        text-decoration: underline;
    }
    

    #check:checked ~ ul{
        left:0;
    }
    

    
}

`;