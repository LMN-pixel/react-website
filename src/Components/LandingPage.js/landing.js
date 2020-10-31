import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Slider from './slider';

export default class Landing extends React.Component{

    render(){

        return(
            <LandingWrapper>
                <div className='page-flex'>

                    <div className='top-img'>
                     <Slider />
                        
                    </div>

                    
                        
                    
                        <div className='row mx-auto'>
                            <div className='card_static col-10 col-xl-4 mx-auto'>
                                <Link to='/products'>
                                    <img className='img-fluid' src='img/landing-secondary1.jpg' alt=' '></img>
                                    <p>Shop Now!</p>
                                </Link>
                            </div>
                            <div className='card_static col-10 col-xl-4 mx-auto'>
                                <Link to='/products'>
                                    <img className='img-fluid' src='img/landing-secondary2.jpg' alt=' '></img>
                                    <p>Shop Now!</p>
                                </Link>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-lg-12 new-text'>
                                <h3>NEW!</h3>
                                <Link to='/products'>
                                    <p>Shop Now!</p>
                                </Link>
                            </div>
                        </div>
                        <div className='row new text-align-center'>
                                <div className='col-6 col-xl'>
                            <Link to='/products'>
                                <img src='img/product.jpg'></img>
                                <p>Shoulder Bags</p>
                            </Link>
                            </div>
                                <div className='col-6 col-xl'>
                            <Link to='/products'>
                                <img src='img/product.jpg'></img>
                                <p>Crossbody Bags</p>
                            </Link>
                            </div>
                                <div className='col-6 col-xl'>
                            <Link to='/products'>
                                <img src='img/product.jpg'></img>
                                <p>Handbags</p>
                            </Link>
                            </div>
                                <div className='col-6 col-xl'>
                            <Link to='/products'>
                                <img src='img/product.jpg'></img>
                                <p>Clutch bags</p>
                            </Link>
                            </div>
                                <div className='col-6 col-xl'>
                            <Link to='/products'>
                                <img src='img/product.jpg'></img>
                                <p>All bags</p>
                            </Link>
                            </div>
                        </div>
                </div>
            </LandingWrapper>
        )
    }
}

const LandingWrapper = styled.div `

.top-img{
    width: 100%;
    height: calc(100vh-200px);
    margin: 0;
    padding: 0;

}
.main-img {
    position: relative;
    width: 100%;
    height: 100%;
}
.main-img-text{
    position: absolute;
    text-align: center;
    top: 25%;
    left: 50%;
    color: white;
    text-decoration: underline;
    font-size: 2em;
    padding: 2%;
    
}


.card_static {
    position: relative;
    text-align: center;
    margin-top: 20px;
    
}
.card_static p{
    font-size: 1.2em;
    font-weight: 400;
    margin-top: 10px;
    padding: 2%;
}

.card_static p:hover {
    text-decoration: underline;
    padding: 1%;
    transition: all .5s;
    cursor: pointer;

}

.new-text{
    text-align: center;
    cursor: pointer;
}
.new-text h3{
    font-weight: 700;
    text-decoration: underline;
}
.new-text p:hover{
    text-decoration: underline;
}

.new {
    width: 100%;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}
.new img{
    width: 100%;
    max-height: 400px;

}
@media (min-width: 1366px){
    .card_static {
        padding: 0 10px;
        margin-top: 2px;
        margin-bottom: 20px;
    }
    .card_static:first-child{
        padding-left: 15px;
        margin-left: 20%;
    }
    .new{
        padding: 0 10px;
    }
    .new:nth-child(odd){
        padding-right: 10px;
    }
    .new:first-child{
        padding-left: 15px;
    }
    .main-img-text{
        position: absolute;
        top: 75%;
        left: 65%;
        color: white;
        text-decoration: underline;
        font-size: 2em;
        padding: 2%;
        cursor: pointer;
    }
}


`;