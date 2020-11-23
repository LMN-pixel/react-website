import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBar(){

    return (
        <SideBarWrap>

        <div>
            <nav className='side_nav'>
                <ul className='side_ul'>
                <Link to='/account'>
                    <li className='side_li' > My Account </li>
                </Link>
                <Link to='/orders'>
                    <li className='side_li'> Orders</li>
                </Link>
                <Link to='/wishlist'>
                    <li className='side_li'> Wishlist</li>
                </Link>
                <Link to='/'>
                    <li className='side_li'> Sign Out</li>
                </Link>
                
                </ul>
            </nav>
        </div>
        </SideBarWrap>
    );
}

const SideBarWrap = styled.div `
margin-top: 150px;
nav {
    border: 0.05px solid #ccc;
    border-radius: 10px;
    display: block;
}
ul {
    
    margin: 0 auto;
    list-style-type: none;
    background-color: white;
    padding: 2%;
}

li {
    
    line-height: 50px;
    padding-left: 20%;
    
    border-bottom: 0.05px solid #ccc;
    
}



`;