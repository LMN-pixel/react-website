import React from 'react';
import styled from 'styled-components';
export default function Title({name, title}) {
    return (
        <TitleWrapper>

        <div className="row">
            <div className=" mx-auto mt-5 text-center text-title">
                <h3 className= "font-weight-bold py-3">
                    {name} {title}
                </h3>
            </div>

        </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div `
width: 100% !important;

`;
