import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface),
    '0xb2C4c57544bFde01D34c26Db1aABF2Cb3F7B1C2b'
);




export default instance;