import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context.js/context';

export default class SearchBar extends React.Component {

    

    render() {

        return (
            <SearchWrapper>
                <div className='search search_bar'>
                    <ProductConsumer>
                        {(value) => (

                <form onChange={(e)=>{value.searchHandler(e)}}>
                    <div className='icon header_search-icon'><i className='fa fa-search'></i></div>
                    <input className='header_search-field search-field' type='text' placeholder='Search' autoComplete='off'/>
                    <span className='site_nav_search-clear'>
                        <svg className='icon site_nav_search-clear_icon'>
                            <i className='fas fa-times'></i>
                        </svg>
                    </span>

                </form>
                        )}
                    </ProductConsumer>
                </div>
            </SearchWrapper>
        )
    }
}

const SearchWrapper = styled.div `


.search_bar {
    position: relative;
    margin-right: 4px;
    margin-bottom: -3px;
}
.icon{
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    pointer-events: none;
    fill: currentColor;
}
.header_search-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10%;
    left: 10px;
    -webkit-transform:translateY(-50%);
    transform: translateY(-50%);
    color: #ccc;
}
.header_search-field {
    width: 100px;
    height: 25px;
    padding-right: 10px;
    padding-left: 35px;
    border: 1px solid #ccc;
    border-radius: 50px;
    -webkit-transition: width .2s ease-in-out;
    transition: width .2s ease-in-out;
    caret-color: #06f;
}
input[placeholder]{
    text-overflow: ellipsis;
}
.site_nav_search_form-clear {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #ccc;
    -webkit-transform:translateY(-50%);
    transform: traanslateY(-50%);
    cursor: pointer;
}
.site_nav_search-clear_icon {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 7px;
    height: 7px;
    color: #fff;
}
`;