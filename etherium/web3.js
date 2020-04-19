import Web3 from 'web3';

let web3;

if ( typeof window !== 'undefined' && typeof window.eth !== 'undefined') {
    // if we are on the BROWSER and METAMASK is running
    web3 = new Web3(window.web3.currentProvider);
    
} else {
    // we are in the SERVER OR metamask is not running 
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/741b62b06288435e856e8567767a3a5b'
    );
    web3 = new Web3(provider);
}

export default web3;


/*

if (typeof window !== 'undefined' && typeof window.eth !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
    web3.currentProvider.enable();
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/741b62b06288435e856e8567767a3a5b"));
  }
*/

