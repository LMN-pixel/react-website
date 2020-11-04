import React, { Component } from 'react';
import styled from 'styled-components';


class RightArrow extends Component {
  render() {
    return(
      <ArrowWrap>

      <div className='backArrow' onClick={this.props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
      </ArrowWrap>
    )
  }
}

const ArrowWrap = styled.div `
z-index: 2;
position: absolute;
top: 50%;
right: 0;

`;
export default RightArrow;