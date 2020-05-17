import React, { Component } from 'react';
import styled from '@emotion/styled';

const BgObj = styled.div`
    position: absolute;

    background-color: ${props => props.Color};

    top: ${props => props.Top};
    bottom: ${props => props.Bottom};
    left: ${props => props.Left};
    right: ${props => props.Right};

    z-index: ${props => props.zIndex};

    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: ${props => props.TransitionDuration}s;
`;

export default class BackgroundObject extends Component {

    prepPosVal = (val) => {
        return typeof val == 'number' ? val + 'px' : val;
    }

    render() {
        return (
            <BgObj
                Color={ this.props.Color }

                Top={ this.prepPosVal(this.props.Top) }
                Bottom={ this.prepPosVal(this.props.Bottom) }
                Left={ this.prepPosVal(this.props.Left) }
                Right={ this.prepPosVal(this.props.Right) }

                zIndex={ this.props.zIndex || -100 }

                TransitionDuration={ this.props.TransitionDuration }
            />
        );
    }
}