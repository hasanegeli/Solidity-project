'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Factory = require('./build/Factory.json');

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Factory2.default.interface), '0xb2C4c57544bFde01D34c26Db1aABF2Cb3F7B1C2b');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYixLQUFLLEFBQUwsTUFBVyxrQkFBUSxBQUFuQixBQURhLFlBRWIsQUFGYSxBQUFqQixBQVFBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL211aGFtbWVkaGFzYW5kdWdlci9Eb2N1bWVudHMvc29saWRpdHkva2lja3N0YXJ0In0=