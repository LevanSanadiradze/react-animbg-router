import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    transition-property: all;\n    transition-timing-function: ease-in-out;\n    transition-duration: ", "s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BgObj = styled.div(_templateObject(), function (props) {
  return props.TransitionDuration;
});

var BackgroundObject = /*#__PURE__*/function (_Component) {
  _inheritsLoose(BackgroundObject, _Component);

  function BackgroundObject() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BackgroundObject.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(BgObj, {
      style: this.props.style,
      TransitionDuration: this.props.TransitionDuration
    });
  };

  return BackgroundObject;
}(Component);

var Index = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Index, _Component);

  function Index(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.convertBgObjsToBgData = function (p) {
      var data = [];
      p.forEach(function (e) {
        data.push({
          Style: e
        });
      });
      return data;
    };

    _this.getBackgroundComponents = function () {
      return _this.state.BackgroundsData.map(function (e, i) {
        return /*#__PURE__*/React.createElement(BackgroundObject, {
          key: "Router_BackgrounObjects_" + i,
          style: e.Style,
          TransitionDuration: e.TransitionDuration
        });
      });
    };

    _this.checkPageChange = function () {
      if (_this.props.Pageid != _this.state.CurrentPageId) {
        _this.changePage(_this.props.Pageid);
      }
    };

    _this.changePage = function (newid) {
      var newpage = _this.state.PagesData[newid];
      var newBgData = _this.state.BackgroundsData;
      newpage.BackgroundData.forEach(function (e) {
        newBgData[e.Id].Style = _extends(_extends({}, newBgData[e.Id].Style), e.TargetStyle);
        newBgData[e.Id].TransitionDuration = e.Duration;
      });

      _this.setState({
        BackgroundsData: newBgData,
        CurrentPage: newpage.Foreground,
        CurrentPageId: newid
      });
    };

    _this.state = {
      CurrentPageId: null,
      CurrentPage: null,
      BackgroundsData: _this.convertBgObjsToBgData(props.BackgroundObjects),
      PagesData: props.Pages
    };
    return _this;
  }

  var _proto = Index.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkPageChange();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkPageChange();
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(Fragment, null, this.getBackgroundComponents(), this.state.CurrentPage);
  };

  return Index;
}(Component);

export default Index;
//# sourceMappingURL=index.modern.js.map
