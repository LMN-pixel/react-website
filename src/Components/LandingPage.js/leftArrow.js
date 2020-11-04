import React, { Component } from 'react';
import styled from 'styled-components';

class LeftArrow extends Component {
  render() {
    return(
      <ArrowWrap>

        <div className='backArrow' onClick={this.props.goToPrevSlide}>
          <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
        </div>
      </ArrowWrap>
    )
  }
}

const ArrowWrap = styled.div `
z-index: 2;
position: absolute;
top: 50%;
left: 0;

`;
export default LeftArrow;