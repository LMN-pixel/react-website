import React from 'react';
import {Product} from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import styled from 'styled-components';

export class ProductList extends React.Component {
    render() {
  
        return (
            <React.Fragment>
                <ProductListWrapper>
        
        <div className='container'>
            <div className='product_list'>   
                <div className='row mt-5'>

                    <div className='d-none d-xl-block col-xl-1 product_list-refinement'>
                        <div className='refinement-bar'>
                                <div className='refinements_wrapper'>
                                    <div className='refinements'>
                                        <div className='refinement-card'>
                                            <div className='refinement-heading collapsed'>
                                                <span className='refinements_modal-arrow'>
                                                    <span className='icon nav-arrow-icon refinements_modal-arrow_icon'>
                                                        <i className='fa fa-chevron-right'></i>
                                                    </span>
                                                    <span className='refinement-header'>Colour</span>
                                                </span>
                                                <span className='refinement-clear d-none'>
                                                    <span className='refinement-clear_text'>clear</span>
                                                    <span className='site_nav_search_form-clear refinement-clear_icon'>
                                                        <span className='icon site_nav_search_form-clear_icon'>
                                                            <i className='fa fa-times'></i>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className='refinement-selected_values d-none'>
                                            </div>
                                            <div className='refinement-scroll_body refinement_wrapper-colorgroup'>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-black' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-black'>
                                                    
                                                        <span className='refinement-color_name'>Black</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-blue' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-blue'>
                                                        
                                                        <span className='refinement-color_name'>Blue</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-brown' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-brown'>
                                                        
                                                        <span className='refinement-color_name'>Brown</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-green' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-green'>
                                                        
                                                        <span className='refinement-color_name'>Green</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-grey' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-grey'>
                                                        
                                                        <span className='refinement-color_name'>Grey</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-metallic' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-metallic'>
                                                        
                                                        <span className='refinement-color_name'>Metallic</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-multi' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-multi'>
                                                        
                                                        <span className='refinement-color_name'>Multi</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-neutral' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-neutral'>
                                                    
                                                        <span className='refinement-color_name'>Neutral</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-orange' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-orange'>
                                                    
                                                        <span className='refinement-color_name'>Orange</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-pink' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-pink'>
                                                        
                                                        <span className='refinement-color_name'>Pink</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-purple' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-purple'>
                                                        
                                                        <span className='refinement-color_name'>Purple</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-red' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-red'>
                                                        
                                                        <span className='refinement-color_name'>Red</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-teal' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-teal'>
                                                        
                                                        <span className='refinement-color_name'>Teal</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-white' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-white'>
                                                        
                                                        <span className='refinement-color_name'>White</span>
                                                    </label>
                                                </div>
                                                <div className='refinement-color custom-control custom-checkbox custom-checkbox--dark'>
                                                    <input type='checkbox' id='color-yellow' className='custom-control-input refinement-input' autocomplete='off'/>
                                                    <label className='custom-control-label refinement-label--color' for='color-yellow'>
                                                        
                                                        <span className='refinement-color_name'>Yellow</span>
                                                    </label>
                                                </div>                                            
                                            </div>
                                        </div>
                                        <div className='refinement-card'>
                                            <div className='refinement-heading collapsed'>
                                                    <span className='refinements_modal-arrow'>
                                                        <span className='icon nav-arrow-icon refinements_modal-arrow_icon'>
                                                            <i className='fa fa-chevron-right'></i>
                                                        </span>
                                                        <span className='refinement-header'>Price</span>
                                                    </span>
                                                    <span className='refinement-clear d-none'>
                                                        <span className='refinement-clear_text'>clear</span>
                                                        <span className='site_nav_search_form-clear refinement-clear_icon'>
                                                            <span className='icon site_nav_search_form-clear_icon'>
                                                                <i className='fa fa-times'></i>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            <div className='refinement-selected_values d-none'></div>
                                            <div className='refinement-scroll_body refinement_wrapper-size'>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='custom-control custom-checkbox custom-checkbox--dark'>
                                                            <input type='checkbox' id='size_l' className='custom-control-input refinement-input' autocomplete='off'/>
                                                            <label class='custom-control-label refinement-label' for='size_'l>
                                                                <span className='size'>Large</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='custom-control custom-checkbox custom-checkbox--dark'>
                                                            <input type='checkbox' id='size_m' className='custom-control-input refinement-input' autocomplete='off'/>
                                                            <label class='custom-control-label refinement-label' for='size_m'>
                                                                <span className='size'>Medium</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='custom-control custom-checkbox custom-checkbox--dark'>
                                                            <input type='checkbox' id='size_s' className='custom-control-input refinement-input' autocomplete='off'/>
                                                            <label class='custom-control-label refinement-label' for='size_s'>
                                                                <span className='size'>Small</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='custom-control custom-checkbox custom-checkbox--dark'>
                                                            <input type='checkbox' id='size_xs' className='custom-control-input refinement-input' autocomplete='off'/>
                                                            <label class='custom-control-label refinement-label' for='size_xs'>
                                                                <span className='size'>XS</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='refinement-card'>
                                                <div className='refinement-heading collapsed'>
                                                    <span className='refinements_modal-arrow'>
                                                        <span className='icon nav-arrow-icon refinements_modal-arrow_icon'>
                                                            <i className='fa fa-chevron-right'></i>
                                                        </span>
                                                        <span className='refinement-header'>Price</span>
                                                    </span>
                                                    <span className='refinement-clear d-none'>
                                                        <span className='refinement-clear_text'>clear</span>
                                                        <span className='site_nav_search_form-clear refinement-clear_icon'>
                                                            <span className='icon site_nav_search_form-clear_icon'>
                                                                <i className='fa fa-times'></i>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className='refinement-selected_values d-none'></div>
                                                <div className='refinement-scroll_body refinement_wrapper-price'>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='refinement-price custom-control custom-radio custom-radio-large'>
                                                            <input type='radio' id='price2000' className='custom-control-input refinement-input' autocomplete='off'/>
                                                                <label className='custom-control-label refinement-label price' for='price2000'>
                                                                    <span className='price'>Ksh 0 to Ksh 2000</span>
                                                                </label>                                                      
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='refinement-price custom-control custom-radio custom-radio-large'>
                                                            <input type='radio' id='price4500' className='custom-control-input refinement-input' autocomplete='off'/>
                                                                <label className='custom-control-label refinement-label price' for='price4500'>
                                                                    <span className='price'>Ksh 2000 to Ksh 5000</span>
                                                                </label>                                                      
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='refinement-price custom-control custom-radio custom-radio-large'>
                                                            <input type='radio' id='price8000' className='custom-control-input refinement-input' autocomplete='off'/>
                                                                <label className='custom-control-label refinement-label price' for='price8000'>
                                                                    <span className='price'>Ksh 5000 to Ksh 8000</span>
                                                                </label>                                                      
                                                        </div>
                                                    </div>
                                                    <div className='refinement-item refinement-card'>
                                                        <div className='refinement-price custom-control custom-radio custom-radio-large'>
                                                            <input type='radio' id='price10000' className='custom-control-input refinement-input' autocomplete='off'/>
                                                                <label className='custom-control-label refinement-label price' for='price10000'>
                                                                    <span className='price'>Ksh 8000 to Ksh 10000</span>
                                                                </label>                                                      
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>                                    
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div className='col-sm-12 col-xl-8 product_list-container'>
                            <Titlebackground>
                                <div>
                                    <Title name=''title="Shop"/>
                                </div>
                            </Titlebackground>
                            <div className="row product_list-sortby_filter mt-3">
                                <div className='col-6 d-xl-none product_list-filter_wrapper'>
                                    <button type='button' className='btn btn-outline-light filter-results col-12
                                    product_list-filter_button text-capitalize'>
                                        "
                                        Filter

                                        "
                                        <span className='icon product_list-filter_icon'>
                                            <i className='fa fa sliders'></i>
                                        </span>
                                    </button>
                                </div>
                                <form className='col-6 col-xl-4 product_list-sortby_wrapper' autocomplete='off'>
                                    <div className='product_list-sortby_title d-none d-xl-block'>
                                        Sort By:
                                    </div>
                                    <select name='sort-order' className='custom-select product_list-sortby_dropdown'>
                                        <option>Featured</option>
                                        <option>New Arrivals</option>
                                        <option>Price (high to low)</option>
                                        <option>Price (low to high)</option>
                                    </select>
                                </form>
                                <div className='col-12 col-xl-4 product_list-container_header'>
                                    <div className='result-count product_list-result_count col-12 col-sm-12'>
                                        <span>
                                            0 Product(s)
                                        </span>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='row'>
                                    
                                    
                                        <ProductConsumer>
                                            {value => {
                                                return value.products.map( product => {
                                                    return <Product key={product.id} product={product}/>;
                                                });
                                                
                                            }}
                                        </ProductConsumer>
                            </div>
                            
                    </div>                                                      
                </div>
            </div>
        
    </div>
   
        
                </ProductListWrapper>
            </React.Fragment>
        
        );
    }
}

const Titlebackground = styled.div `
background: url(img/wallpaper.jpg);
background-size: cover;
margin: auto;
max-height: 250px;
@media (max-width: 770px){
    h3 {
        margin-top: 0!important;
        padding-top: 0!important;
        padding-bottom: 5px !important;
        font-size: 1.5rem;
        line-height: 40px;
    }
    
}
@media (min-width: 1366px){
    width: 100%;
}
`;

const ProductListWrapper = styled.div `
margin:0 !important;
padding:0 !important;

.product_list {
 padding-bottom: 36px;
 margin-top: 150px;
}    
.product_list-filter_wrapper {
    padding-right: 5px;
}
.product_list-filter_button {
    padding-left: .5rem;
    text-align: left;
}
button {
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.icon {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    pointer-events: none;
    fill: currentColor;
}
.product_list-filter_icon {
    position: absolute;
    right: 10px;
    height: 21px;
}

.product_list-sortby_wrapper {
    padding-left: 5px;
}
.product_list-sortby_title {
    min-width: 62px;
}
.product_list-sortby_dropdown {
    max-width: 200px;
    font-size:.8em;
}
.product_list-container_header {
    margin-top: 14px;
}
.product_list-result_count {
    padding-top: 5px;
    text-align: center;

}
.product_list-grid {
    margin: 28px -20px 0;
}
.refinement-card {
    position: relative;
    margin: 0 0 3px;
    padding: 12px 0 13px;
    border-bottom: 1px solid #f0f0f0;
}
.refinement-heading {
    padding: 0 0 9px;
    font-weight: 700;
}
.refinement-heading.collapsed {
    padding: 0;
    font-weight: 400;
}
.refinements_modal-arrow {
    margin: 0 9px 0 2px;
}
.refinements_modal-arrow_icon {
    width: 5px;
    height: 10px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
.refinement-heading.collapsed .refinements_modal-arrow_icon {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
.refinement-header {
    text-transform: uppercase;
}
.refinement-clear {
    position: absolute;
    top: 11px;
    right: 0;
    cursor: pointer;
}
.refinement-clear_text {
    padding-right: 18px;
    font-size: .5625rem;
    text-transform: capitalize;
    text-decoration: underline;
}
.refinement-heading .refinement-clear_text {
    font-weight: 400;
}
.site_nav_search_form-clear {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #ccc;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
}
.refinement-clear_icon {
    right: 0;
}
.site_nav_search_form-clear_icon {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 7px;
    height: 7px;
    color: #fff;
}
.refinement-selected_values {
    padding: 0 0 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
}
.collapsed+.refinement-selected_values {
    padding-top: 10px;
}
.refinement_wrapper-colorgroup {
    padding-top: 9px;
}
.refinement-color {
    margin: 0;
    padding: 15px 0 8px 47px;
    border-top: 1px solid #f0f0f0;
}
.refinement-label {
    padding-left: 3px;
}
.refinement-label--color {
    padding: 0 7px 0 3px;
}
.swatch-circle-black {
    width: 2.5em;
    height: 2.5em;
    border: 1px solid #ccc;
    border-radius: 1.25em;
    background: #000;
    position: relative;
    display: block;
}
.refinement-color .color {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.refinement-color_name {
    display: inline-block;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    padding: 0 0 0 6px;
    text-transform: capitalize;
}
.refinement-card:last-child {
    border-bottom: 0;
}
.refinement-card .refinement-item {
    margin-top: 16px;
    padding-bottom: 0;
    padding-left: 18px;
    border-top: 1px solid #f0f0f0;
    border-bottom: 0;
}
.custom-radio--large .custom-control-label {
    padding-left: 10px;
}


@media (min-width: 721px)
.product_list-sortby_filter {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 20px;
}

@media (max-width: 1365.98px)
.container_full_width--lg_down {
    width: 100%;
    max-width: none;
}
@media (min-width: 1366px)
.product_list-container {
    margin-right: -2px;
  
}
.product_list-sortby_wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 10px;
}
.product_list-container_header {
    margin-top: 14px;
}
.product_list-result_count {
    padding-top: 5px;
    text-align: center;
}
.product_list-grid {
    margin: 0 -30px;
}
.product_list-refinement {
    max-width: 304px;
    margin: 20px 10px 0 0;
    padding: 0 0 0 5px;
}
.refinement-card {
    margin-bottom: 30px;
    padding: 9px 0;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
}
.refinement-heading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 20px 5px;
    padding: 0 0 9px;
    border-bottom: 1px solid #ccc;
}
.refinement-heading.collapsed {
    padding: 0 0 9px;
}
.refinements_modal-arrow {
    display: none;
}
.refinement-header {
    font-weight: 700;
}
.refinement-clear {
    top: 7px;
    right: 20px;
}
.refinement-clear_text {
    text-decoration: none;
}
.refinement-clear_icon {
    top: 12px;
}
.refinement-selected_values {
    display: none;
}
.refinement-scroll_body {
    max-height: 212px;
    overflow-x: hidden;
    overflow-y: auto;
}
.refinement-color {
    padding: 0 0 4px 47px;
    border: 0;
}
.refinement-label, .refinement-label.price {
    padding-left: 8px;
}
.refinement-card:last-child {
    border: 1px solid #f0f0f0;
}
.refinement-card .refinement-card {
    max-height: 100%;
}
.refinement-card .refinement-item {
    margin: 9px 20px;
    padding: 0;
    border: 0;
}
.refinement-scroll_body>.refinement-item {
    width: 268px;
    padding-right: 20px;
}
.refinement-price {
    padding-left: 27px!important;
}
.refinement-label, .refinement-label.price {
    padding-left: 8px;
}
.container {
    max-width: 100% !important;
    padding: 20px 0 20px 20px;
}
`;