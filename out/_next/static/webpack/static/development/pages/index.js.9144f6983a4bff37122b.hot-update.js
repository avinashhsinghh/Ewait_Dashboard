webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/Main */ "./component/Main/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var _jsxFileName = "C:\\Users\\user\\Desktop\\chatBot\\chatBot\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  var _super = _createSuper(index);

  function index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    _this = _super.call(this, props);
    _this.state = {
      row: [],
      isPageLoading: false,
      language: "eng"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.setState({
                isPageLoading: true
              });
              setInterval(function _callee() {
                var _responseJson$respons, response, responseJson, newData;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch("https://v12qe1f1jf.execute-api.us-east-1.amazonaws.com/Dev/get-all-data", {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }));

                      case 3:
                        response = _context.sent;
                        _context.next = 6;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

                      case 6:
                        responseJson = _context.sent;
                        console.log(responseJson);
                        newData = [];
                        (_responseJson$respons = responseJson.responseData) === null || _responseJson$respons === void 0 ? void 0 : _responseJson$respons.forEach(function (element) {
                          newData.push({
                            name: element === null || element === void 0 ? void 0 : element.name,
                            arrived: element === null || element === void 0 ? void 0 : element.arrived,
                            PhoneNo: element === null || element === void 0 ? void 0 : element.PhoneNo,
                            dateTime: element === null || element === void 0 ? void 0 : element.dateTime
                          });
                        });

                        _this2.setState({
                          row: newData
                        }, function () {
                          console.log("Row", _this2.state.row);
                        });

                        _context.next = 16;
                        break;

                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](0);
                        console.log(_context.t0);

                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, [[0, 13]], Promise);
              }, 1500);
              this.setState({
                isPageLoading: false
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "callPatient",
    value: function callPatient(number, name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function callPatient$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(number);
              console.log(name);
              _context3.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch("https://q1fjzbeq8l.execute-api.us-east-1.amazonaws.com/non-prod/make-outbound-call", {
                method: "POST",
                body: JSON.stringify({
                  "callbackNumber": number.toString(),
                  "name": name
                }),
                headers: {
                  'Access-Control-Allow-Headers': 'Content-Type/JSON',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                  "X-API-Key": "4ej79ShQA8JeqVFOKV366OnjC4ZMUKk9kUWnOat2",
                  "Content-Type": "application/json"
                }
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(value, number) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function changeStatus$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch("https://v12qe1f1jf.execute-api.us-east-1.amazonaws.com/Dev/get-patient-data/" + number + "/put-patient-data", {
                method: "PUT",
                body: JSON.stringify({
                  "arrived": value
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_component_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isLoading: this.state.isPageLoading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "w-full md:w-3/4 mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "bg-blue-900 w-full p-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, __jsx("label", {
        className: "font-semibold font-montserrat text-xl text-white ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, "Patient Arrival Dashboard")), __jsx("div", {
        className: "grid grid-cols-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-span-2 border text-center py-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }, __jsx("label", {
        className: "font-montserrat md:text-lg font-semibold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }
      }, "Patient")), __jsx("div", {
        className: "col-span-2 border text-center py-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("label", {
        className: "font-montserrat text-lg font-semibold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 15
        }
      }, "Appointment Time")), __jsx("div", {
        className: "col-span-4 border text-center py-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx("label", {
        className: "font-montserrat text-lg font-semibold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }, "Status"), __jsx("div", {
        className: "grid grid-cols-4 border-t",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-span-1 border-r font-montserrat font-semibold pt-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, "Arrived (Y/N)"), __jsx("div", {
        className: "col-span-1 border-r font-montserrat font-semibold pt-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, "Signed In (Y/N)"), __jsx("div", {
        className: "col-span-1 border-r font-montserrat font-semibold ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, "Checking In (Waiting/IN)"), __jsx("div", {
        className: "col-span-1 font-montserrat font-semibold my-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }, "In With DOC/HYG")))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }, this.state.row.map(function (item, index) {
        return __jsx("div", {
          className: "grid grid-cols-8",
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "col-span-2 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 19
          }
        }, __jsx("label", {
          className: "font-semibold font-montserrat",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }
        }, item.name)), __jsx("div", {
          className: "col-span-2 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 19
          }
        }, __jsx("label", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }
        }, item.dateTime)), __jsx("div", {
          className: "col-span-1 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }
        }, __jsx("select", {
          value: item.arrived,
          onChange: function onChange(event) {
            _this3.changeStatus(event.target.value, item.PhoneNo);

            var newrow = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.row);

            newrow[index].arrived = event.target.value;

            _this3.setState({
              row: newrow
            });
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 20
          }
        }, __jsx("option", {
          value: "No",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }
        }, "No"), __jsx("option", {
          value: "Yes",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }
        }, "Yes"), __jsx("option", {
          value: "With Doctor",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 21
          }
        }, "With Doctor"))), __jsx("div", {
          className: "col-span-1 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 19
          }
        }, "Yes"), __jsx("div", {
          className: "col-span-1 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 19
          }
        }, "Waiting to be called", __jsx("a", {
          onClick: function onClick() {
            _this3.callPatient(item.PhoneNo, item.name);
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPhoneSquare"],
          size: "2x",
          className: "cursor-pointer mr-6",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 23
          }
        }))), __jsx("div", {
          className: "col-span-1 border text-center pt-2" + (item.arrived === "Yes" && " bg-green-500 ") + (item.arrived === "With Doctor" && " bg-gray-500 "),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 19
          }
        }, "With Hygienist (casey)"));
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }
      })));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.9144f6983a4bff37122b.hot-update.js.map