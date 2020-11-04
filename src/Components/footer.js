import React from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Footer extends React.Component {

    render() {
        return (
            <FooterWrapper>

                    <footer className='page_footer'>
                        <div className='container-fluid footer_newsletter'>
                            <div className='container'>
                                <div className='row email_signup'>
                                    <div className='col-md-9'>
                                        <form role='form' method='POST' className='simple-subscription'>
                                            <div className='input-group form-group footer_newsletter-wrapper'>
                                                <input type='email' required className='form-control footer_newsletter-input' name='email' placeholder='email' aria-label='Sign up for our newsletter'/>
                                                <div className='input-group-append footer_newsletter-append'>
                                                    <button type='submit' className='btn btn-primary footer_newsletter-btn'>Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='col-sm-3 d-none d-md-block social'>
                                        <div className='content-asset'>
                                            <ul className='social-links list-unstyled'>
                                                <li className='social-item'>FOLLOW US</li>
                                                <li className='social-item'>
                                                    <i className='fa fa-facebook'></i>
                                                </li>
                                                <li className='social-item'>
                                                    <i className='fa fa-instagram'></i>
                                                </li>
                                                <li className='social-item'>
                                                    <i className='fa fa-twitter'></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row page_footer-container'>
                                <div className='page_footer-item col-md-3 store'>
                                    <div className='content-asset'>
                                        <h3 className='page_footer-heading collapsed' data-target='#footer-main' data-toggle='collapse'>
                                            <svg className='icon d-md-none'>
                                                <i className='fas fa-chevron-down'></i>
                                            </svg>
                                            Shopping With Us
                                        </h3>
                                        <ul className='page_footer-menu content d-none d-md-block collapse list-unstyled' data-parent='#footer-main'>
                                            <li>
                                                <a href='#' title="My Account">My Account</a>
                                            </li>
                                            <li>
                                                <a href='#' title="Shipping and Tracking">Shipping and Tracking</a>
                                            </li>
                                            <li>
                                                <a href='#' title="Returns and Exchanges">Returns and Exchanges</a>
                                            </li>
                                            <li>
                                                <a href='#' title="Promotions">Promotions</a>
                                            </li>
                                            <li>
                                                <a href='#' title="Size Guide">Size Guide</a>
                                            </li>
                                            <li>
                                                <a href='#' title="Refer a Friend">Refer a Friend</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='page_footer-item col-md-3'>
                                    <div className='content-asset'>
                                        <h3 className='page_footer-heading collapsed'>
                                            <svg className='icon d-md-none'>
                                                <i className='fas fa-chevron-down'></i>
                                            </svg>
                                                Customer Care
                                        </h3>
                                        <ul className='page_footer-menu content d-none d-md-block list-unstyled'>
                                            <li>
                                                <a href='#' title='Order Status'>Order Status</a>
                                            </li>
                                            <li>
                                                <a href='#' title='FAQ'>FAQ</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Contact Us'>Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='page_footer-item col-md-3'>
                                    <div className='content-asset'>
                      
                                        <h3 className='page_footer-heading collapsed'>
                                            <svg className='icon d-md-none'>
                                                <i className='fas fa-chevron-down'></i>
                                            </svg>
                                            About Us
                                        </h3>
                                        <ul className='page_footer-menu content d-none d-md-block list-unstyled'>
                                            <li>
                                                <a href='#' title='Store Locator'>Store Locator</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Brand Profile'>Brand Profile</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Sustainability'>Sustainability</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Opportunities'>Opportunities</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Affiliates'>Affiliates</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='page_footer-item col-md-3 d-block d-md-none policy'>
                                    <div className='content-asset'>
                                        <h3 className='page_footer-copyright_heading page_footer-heading collapsed'>
                                            <svg className='icon d-md-none'>
                                                <i className='fas fa-chevron-down'></i>
                                            </svg>
                                            Policies
                                        </h3>
                                        <ul className='page_footer-menu page_footer-menu_copyright content d-none d-md-block list-unstyled'>
                                            <li className='page_footer-copyright_text'>
                                                &copyright Kefira, all rights reserved
                                            </li>
                                            <li>
                                                <a href='#' title='Terms of Use'>Terms of Use</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Privacy Policy'>Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href='#' title='Cookies Policy'>Cookies Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-3 social d-block d-md-none'>
                                    <div className='content-asset'>
                                        <ul className='social-links list-unstyled'>
                                            <li className='social-item'>FOLLOW US</li>
                                            <li className='social-item'>
                                                <a href='#' target='_blank' title='Go to Facebook'>
                                                <i className='fa fa-facebook'></i>
                                                </a>
                                            </li>
                                            <li className='social-item'>
                                                <a href='#' target='_blank' title='Go to Instagram'>
                                                <i className='fa fa-instagram'></i>
                                                </a>
                                            </li>
                                            <li className='social-item'>
                                                <a href='#' target='_blank' title='Go to Twitter'>
                                                <i className='fa fa-twitter'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='page_footer-item col-md-3 page_footer-download'>
                                    <div className='content-asset'>
                                        <div className='payment_methods_part'>
                                            <h3 className='payment_methods_part-title'>ACCEPTED PAYMENT METHODS</h3>
                                            <div className='payment_methods_part-img'>
                                                <img alt='Mastercard' className='payment_icon' src='img/Mastercard.jpg' style={{maxWidth:'30px'}}/>
                                                <img alt='Mpesa' className='payment_icon' src='img/MPesa.jpg' style={{maxWidth:'30px'}}/>
                                                <img alt='Visa' className='payment_icon' src='img/Visa.jpg' style={{maxWidth:'30px'}}/>
                                                <img alt='Paypal' className='payment_icon' src='img/Paypal.jpg' style={{maxWidth:'30px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                        

                    </footer>
                
            </FooterWrapper>
        );
    }
} 

const FooterWrapper = styled.div `
margin-top: 20px;
.page_footer {
    padding: 0 5px;
    background-color: #333;
    color: #fff;
}
.footer_newsletter {
    padding: 0;
    background-color: transparent;
}
.footer_newsletter-wrapper {
    margin: 20px 0;
}
.footer_newsletter-input {
    height: auto;
    border-color: #000;
    border-right-width: 0;
}
.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(2.3875rem + 2px);
    padding: .625rem .9375rem;
    font-size: .875rem;
    line-height: 1.3;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.footer_newsletter-append{
    margin-left: 0;
}
.footer_newsletter-btn {
    min-width: 85px;
    padding: .5rem .75rem;
    border-width: 1px 1px 1px 0;
    border-color: #000!important;
    background: -webkit-gradient(linear,left top,left bottom,from(#666),to(#333));
    background: linear-gradient(#666,#333);
    font-size: .875rem;
    text-transform: uppercase;
}
.input-group-append .btn, .input-group-prepend .btn {
    position: relative;
    z-index: 2;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .625rem .9375rem;
    font-size: .875rem;
    line-height: 1.3;
    border-radius: 5px;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.social {
    padding: 0 20px;
}
.social-links {
    margin: 20px 0 30px;
    padding: 0;
}
.social-item {
    display: inline-block;
    margin: 0 15px 0 0;
    vertical-align: middle;
    font-weight: 700;
    font-size: .9em;
}
.social-item:first-child {
    display: block;
    margin-bottom: 7px;
}
.page_footer-container {
    padding: 20px 0 0;
}
.page_footer-item {
    margin: 0 0 2px;
    padding: 0 20px;
}
.page_footer-heading.collapsed {
    font-weight: 400;
}
.page_footer-item .content-asset h3 {
    font-size: .875rem;
    letter-spacing: .04em;
    margin-bottom: .75rem;
    cursor: pointer;
}
.page_footer-heading {
    font-weight: 700;
}
.page_footer-heading .icon {
    width: 5px;
    height: 10px;
    margin: 0 12px 0 0;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s,-webkit-transform .2s;
    fill: #999;
}
.page_footer-heading.collapsed .icon {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
.page_footer-menu {
    padding: 0 0 0 60px;
}
.page_footer-menu li {
    margin: 0 0 4px;
}
.page_footer-container .policy {
    padding: 0 20px 18px;
}
.page_footer-copyright_heading, .page_footer-copyright_text {
    display: none;
}
.page_footer-container .page_footer-copyright_heading {
    display: block;
}
.page_footer-heading.collapsed {
    font-weight: 400;
}
.page_footer-download {
    padding: 20px;
}
img {
    max-width: 30px;
    vertical-align: middle;
    border-style: none;
}
.page_footer-container img {
    margin: 0 10px 0 0;
}

@media (min-width: 1366px)
.social-links {
    margin: 38px 0;
}
.page_footer-container img {
    padding-bottom: 10px;
   
}
@media (min-width: 1023px)
.social-links {
    margin: 22px 0;
}
@media (min-width: 1366px) and (min-width: 721px)
.social-item:first-child {
    display: inline-block;
    margin: 0 20px 0 0;
}
@media (min-width: 721px) {
    .page_footer {
        padding: 0;
    }
    .footer_newsletter {
        background-color: #444;
    }
    .footer_newsletter-wrapper {
        max-width: 350px;
        margin: 30px 0;
    }
    
.social-item:first-child {
    display: block;
    margin-bottom: 13px;
}
.page_footer-container {
    padding: 22px 0 0;
}
.page_footer-item .content-asset h3 {
    font-weight: 700;
    cursor: default;
}
.page_footer-heading {
    font-weight: 400;
    text-transform: uppercase;
}
.page_footer-menu {
    padding: 0;
}
.page_footer-copyright_text {
    display: block;
}
.page_footer-download {
    padding: 0 20px 20px;
}
}
`;