import React, { Component } from 'react';
import styled from '@emotion/styled';

const BgObj = styled.div`
    position: absolute;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: ${props => props.TransitionDuration}s;
`;

export default class BackgroundObject extends Component {

    render() {
        return (
            <BgObj
                style={ this.props.style }
                TransitionDuration={ this.props.TransitionDuration }
            />
        );
    }
}