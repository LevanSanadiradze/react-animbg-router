import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

let _ = t => t,
    _t;
const BgObj = styled.div(_t || (_t = _`
    position: absolute;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: ${0}s;
`), props => props.TransitionDuration);
class BackgroundObject extends Component {
  render() {
    return /*#__PURE__*/React.createElement(BgObj, {
      style: this.props.style,
      TransitionDuration: this.props.TransitionDuration
    });
  }

}

class Index extends Component {
  constructor(props) {
    super(props);

    this.convertBgObjsToBgData = p => {
      const data = [];
      p.forEach(e => {
        data.push({
          Style: e
        });
      });
      return data;
    };

    this.getBackgroundComponents = () => {
      return this.state.BackgroundsData.map((e, i) => {
        return /*#__PURE__*/React.createElement(BackgroundObject, {
          key: "Router_BackgrounObjects_" + i,
          style: e.Style,
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
        newBgData[e.Id].Style = { ...newBgData[e.Id].Style,
          ...e.TargetStyle
        };
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
      BackgroundsData: this.convertBgObjsToBgData(props.BackgroundObjects),
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
    return /*#__PURE__*/React.createElement(Fragment, null, this.getBackgroundComponents(), this.state.CurrentPage);
  }

}

export default Index;
//# sourceMappingURL=index.modern.js.map
