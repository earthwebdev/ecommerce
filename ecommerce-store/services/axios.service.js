const {default: axios} = require("axios");

const  BACKEND_URL = 'http://localhost:3001';
export const getProductById = async(id) => {
    const resp = axios.get(BACKEND_URL + '/api/products?id=' + id);
    console.log(resp);
    return resp;
}