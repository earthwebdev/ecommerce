import { data } from 'autoprefixer';
import axios from 'axios';

export const getProducts = async() => {
    const response = await axios.get('/api/products');
    return response;
}

export const getCategories = async() => {
    const response = await axios.get('/api/categories');
    return response.data;
}
export const insertCategoies = async (data) => {
    const response = await axios.post('/api/categories', data, {
        headers:{
            'Content-Type': 'application/json'
        }
    });
    
    return response;
}

export const updateCategoies = async (data) => {
    const response = await axios.put('/api/categories', data, {
        headers:{
            'Content-Type': 'application/json'
        }
    });
    
    return response;
}

export const deleteCategoies = async(id) => {
    //const data = {_id: id}
    //console.log(id);

    const response = await axios.delete(`/api/categories/${id}`);
    return response;
}