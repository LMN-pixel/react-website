import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import landingData from './carouselData';
import './carousel.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {landing: landingData};
  }

  render() {
    return(
      <section>
      {
        this.state.landing.map((s, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
              <div className='cont'>
                <img className='wrapper_img' src={s.img} alt=' '></img>
                <div className='img_text'>
                  <h2 className={index === 0 ? 'mainSlide heading' : 'slider-item heading'}>{s.title}</h2>
                  <p className='slider_text'>{s.description}</p>
                  <Link to='/products'><button className='button'>{s.buttons}</button></Link>
                  
                </div>
              </div>
              
          </div>
         
        ) }
        </section>
    )
  }
}
export default Slide;