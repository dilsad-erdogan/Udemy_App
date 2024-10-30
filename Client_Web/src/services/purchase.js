import axios from 'axios';
const PURCHASE = "http://localhost:3000/purchase";

const get = async () => {
    try{
        const response = await axios.get(`${PURCHASE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching:', error);
        throw error;
    }
};

const byUser = async (id) => {
    try{
        const response = await axios.get(`${PURCHASE}/byUser/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byUser:', error);
        throw error;
    }
};

const add = async (data) => {
    try{
        const response = await axios.post(`${PURCHASE}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding:', error);
        throw error;
    }
};

const mServices = {
    get,
    byUser,
    add,
};

export default mServices;