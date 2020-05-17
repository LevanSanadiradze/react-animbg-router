import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

let _ = t => t,
    _t;
const BgObj = styled.div(_t || (_t = _`
    position: absolute;

    background-color: ${0};

    top: ${0};
    bottom: ${0};
    left: ${0};
    right: ${0};

    z-index: ${0};

    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: ${0}s;
`), props => props.Color, props => props.Top, props => props.Bottom, props => props.Left, props => props.Right, props => props.zIndex, props => props.TransitionDuration);
class BackgroundObject extends Component {
  constructor(...args) {
    super(...args);

    this.prepPosVal = val => {
      return typeof val == 'number' ? val + 'px' : val;
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(BgObj, {
      Color: this.props.Color,
      Top: this.prepPosVal(this.props.Top),
      Bottom: this.prepPosVal(this.props.Bottom),
      Left: this.prepPosVal(this.props.Left),
      Right: this.prepPosVal(this.props.Right),
      zIndex: this.props.zIndex || -100,
      TransitionDuration: this.props.TransitionDuration
    });
  }

}

class Index extends Component {
  constructor(props) {
    super(props);

    this.getBackgroundObjects = objs => {
      return objs.map((e, i) => {
        return /*#__PURE__*/React.createElement(BackgroundObject, {
          key: "Router_BackgrounObjects_" + i,
          Color: e.Color,
          Top: e.Position.Top,
          Bottom: e.Position.Bottom,
          Left: e.Position.Left,
          Right: e.Position.Right,
          TransitionDuration: e.TransitionDuration
        });
      });
    };

    this.checkPageChange = () => {
      if (this.props.Pageid != this.state.CurrentPageId) {
        this.changePage(this.props.Pageid);
      }
    };

    this.changePage = newid => {
      const newpage = this.state.PagesData[newid];
      const newBgData = this.state.BackgroundsData;
      newpage.BackgroundData.forEach(e => {
        newBgData[e.Id].Position = e.targetPosition;
        newBgData[e.Id].TransitionDuration = e.Duration;
      });
      this.setState({
        BackgroundsData: newBgData,
        CurrentPage: newpage.Foreground,
        CurrentPageId: newid
      });
    };

    this.state = {
      CurrentPageId: null,
      CurrentPage: null,
      BackgroundsData: props.BackgroundObjects,
      PagesData: props.Pages
    };
  }

  componentDidMount() {
    this.checkPageChange();
  }

  componentDidUpdate() {
    this.checkPageChange();
  }

  render() {
    return /*#__PURE__*/React.createElement(Fragment, null, this.getBackgroundObjects(this.state.BackgroundsData), this.state.CurrentPage);
  }

}

export default Index;
//# sourceMappingURL=index.modern.js.map
