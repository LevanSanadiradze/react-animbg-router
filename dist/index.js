function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('@emotion/styled'));

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
  var data = _taggedTemplateLiteralLoose(["\n    position: absolute;\n\n    background-color: ", ";\n\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n\n    z-index: ", ";\n\n    transition-property: all;\n    transition-timing-function: ease-in-out;\n    transition-duration: ", "s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BgObj = styled.div(_templateObject(), function (props) {
  return props.Color;
}, function (props) {
  return props.Top;
}, function (props) {
  return props.Bottom;
}, function (props) {
  return props.Left;
}, function (props) {
  return props.Right;
}, function (props) {
  return props.zIndex;
}, function (props) {
  return props.TransitionDuration;
});

var BackgroundObject = /*#__PURE__*/function (_Component) {
  _inheritsLoose(BackgroundObject, _Component);

  function BackgroundObject() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.prepPosVal = function (val) {
      return typeof val == 'number' ? val + 'px' : val;
    };

    return _this;
  }

  var _proto = BackgroundObject.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(BgObj, {
      Color: this.props.Color,
      Top: this.prepPosVal(this.props.Top),
      Bottom: this.prepPosVal(this.props.Bottom),
      Left: this.prepPosVal(this.props.Left),
      Right: this.prepPosVal(this.props.Right),
      zIndex: this.props.zIndex || -100,
      TransitionDuration: this.props.TransitionDuration
    });
  };

  return BackgroundObject;
}(React.Component);

var Index = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Index, _Component);

  function Index(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.getBackgroundObjects = function (objs) {
      return objs.map(function (e, i) {
        return /*#__PURE__*/React__default.createElement(BackgroundObject, {
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

    _this.checkPageChange = function () {
      if (_this.props.Pageid != _this.state.CurrentPageId) {
        _this.changePage(_this.props.Pageid);
      }
    };

    _this.changePage = function (newid) {
      var newpage = _this.state.PagesData[newid];
      var newBgData = _this.state.BackgroundsData;
      newpage.BackgroundData.forEach(function (e) {
        newBgData[e.Id].Position = e.targetPosition;
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
      BackgroundsData: props.BackgroundObjects,
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
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, this.getBackgroundObjects(this.state.BackgroundsData), this.state.CurrentPage);
  };

  return Index;
}(React.Component);

module.exports = Index;
//# sourceMappingURL=index.js.map
