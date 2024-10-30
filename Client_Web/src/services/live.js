import axios from 'axios';
const LIVE = "http://localhost:3000/live";

const get = async () => {
    try{
        const response = await axios.get(`${LIVE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching:', error);
        throw error;
    }
};

const byUser = async (id) => {
    try{
        const response = await axios.get(`${LIVE}/byUser/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byUser:', error);
        throw error;
    }
};

const byLive = async (id) => {
    try{
        const response = await axios.get(`${LIVE}/byLive/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byLive:', error);
        throw error;
    }
};

const add = async (data) => {
    try{
        const response = await axios.post(`${LIVE}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding:', error);
        throw error;
    }
};

const updateTitle = async (id, data) => {
    try{
        const response = await axios.put(`${LIVE}/updateTitle/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updateTitle:', error);
        throw error;
    }
};

const updateDescription = async (id, data) => {
    try{
        const response = await axios.put(`${LIVE}/updateDescription/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updateDescription:', error);
        throw error;
    }
};

const updatePng = async (id, data) => {
    try{
        const response = await axios.put(`${LIVE}/updatePng/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updatePng:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${LIVE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting movement:', error);
        throw error;
    }
};

const liveServices = {
    get,
    byUser,
    byLive,
    add,
    updateTitle,
    updateDescription,
    updatePng,
    deleted
};

export default liveServices;