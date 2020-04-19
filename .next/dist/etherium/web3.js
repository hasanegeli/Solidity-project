'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.eth !== 'undefined') {
    // if we are on the BROWSER and METAMASK is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are in the SERVER OR metamask is not running 
    var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/v3/741b62b06288435e856e8567767a3a5b');
    web3 = new _web2.default(provider);
}

exports.default = web3;

/*

if (typeof window !== 'undefined' && typeof window.eth !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
    web3.currentProvider.enable();
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/741b62b06288435e856e8567767a3a5b"));
  }
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGgiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsUUFBc0IsQUFBNUQsYUFBeUUsQUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBRUg7QUFKRCxPQUlPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmOztBQUdBIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL211aGFtbWVkaGFzYW5kdWdlci9Eb2N1bWVudHMvc29saWRpdHkva2lja3N0YXJ0In0=