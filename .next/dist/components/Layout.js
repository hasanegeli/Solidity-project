'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/muhammedhasanduger/Documents/solidity/kickstart/components/Layout.js';
//Head başlığı içinde link tagini Html deki head içine taşıyabiliriz

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSGVhZCIsIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUTs7OztBQUVSLEFBQVMsQUFFVDs7Ozs7QUFIQTs7a0JBR2UsVUFBQSxBQUFDLE9BQVUsQUFDdEI7MkJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSwrQ0FDVSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTt5QkFFSixBQUFDOztzQkFBRDt3QkFKSixBQUlJLEFBQ0M7QUFERDtBQUFBLGNBTFIsQUFDSSxBQUtXLEFBR2xCO0FBVkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tdWhhbW1lZGhhc2FuZHVnZXIvRG9jdW1lbnRzL3NvbGlkaXR5L2tpY2tzdGFydCJ9