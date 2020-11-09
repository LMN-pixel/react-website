import React from 'react';
import styled from 'styled-components';

export default class CountrySelect extends React.Component {
    constructor (props){
        super(props);
        this.state =  {
            country: ''
        }
    }

    selectHandler = (e) => {
        const country = this.state.country;
        const updateCountry = {
            ...country,
            [e.target.name]: e.target.value
        }
        this.setState({
            country: updateCountry
        })
    }

    render() {
        return (
            <countryWrap>
            <select style={{marginTop:'50px', border:'none'}}>
                <option value=''>Kenya, KES</option>
                <option value={this.state.country}>Tanzania, TZS</option>
                <option value={this.state.country}>Uganda, UGX</option>
            </select>
            </countryWrap>
        )
    }
}






