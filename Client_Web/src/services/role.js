import axios from 'axios';
const ROLE = "http://localhost:3000/role";

const get = async () => {
    try{
        const response = await axios.get(`${ROLE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching movement:', error);
        throw error;
    }
};

const add = async (data) => {
    try{
        const response = await axios.post(`${ROLE}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding movement:', error);
        throw error;
    }
};

const update = async (id, name) => {
    try{
        const response = await axios.put(`${ROLE}/update/${id}`, name);
        return response.data;
    } catch (error){
        console.error('Error updating desc:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${ROLE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting movement:', error);
        throw error;
    }
};

const byId = async (id) => {
    try{
        const response = await axios.get(`${ROLE}/byId/${id}`);
        return response.data;
    } catch (error){
        console.error('Error role services:', error);
        throw error;
    }
};

const mServices = {
    get,
    add,
    update,
    deleted,
    byId
};

export default mServices;