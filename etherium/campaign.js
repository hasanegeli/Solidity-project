import web3 from './web3';
import Campaign from './build/Campaign.json';

export default address => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    )
}

/*
specifik olan contrat adresi elimizde zaten 
o adresin karşılığında Campaign contrat ının methodlarını 
kullanmak için bi fonksiyon oluşturuyoruz. Show.js te kullanıcaz.
*/ 