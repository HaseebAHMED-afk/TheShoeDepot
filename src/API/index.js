import axios from 'axios';

export const fetchShoes = async ()=>{
    try {
        const {data:{nike,adidas,reebok,underarmour}} = await axios.get('https://api.jsonbin.io/b/5f35610e4d93991036142ed9');
        return {nike,adidas,reebok,underarmour};
    } catch (err) {
        console.log(err);
    }
}