import axios from 'axios';
const PERMISSION = "http://localhost:3000/permission";

const get = async () => {
    try{
        const response = await axios.get(`${PERMISSION}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching:', error);
        throw error;
    }
};

const byUser = async (id) => {
    try{
        const response = await axios.get(`${PERMISSION}/byUser/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byUser:', error);
        throw error;
    }
};

const add = async (data) => {
    try{
        const response = await axios.post(`${PERMISSION}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding:', error);
        throw error;
    }
};

const update = async (id, permission_status) => {
    try{
        const response = await axios.put(`${PERMISSION}/update/${id}`, permission_status);
        return response.data;
    } catch (error){
        console.error('Error updating:', error);
        throw error;
    }
};

const permissionServices = {
    get,
    byUser,
    add,
    update
};

export default permissionServices;