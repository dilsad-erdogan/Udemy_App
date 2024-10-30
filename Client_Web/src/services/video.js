import axios from 'axios';
const VIDEO = "http://localhost:3000/video";

const get = async () => {
    try{
        const response = await axios.get(`${VIDEO}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching:', error);
        throw error;
    }
};

const byUser = async (id) => {
    try{
        const response = await axios.get(`${VIDEO}/byUser/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byUser:', error);
        throw error;
    }
};

const byVideo = async (id) => {
    try{
        const response = await axios.get(`${VIDEO}/byVideo/${id}`);
        return response.data;
    } catch (error){
        console.error('Error byVideo:', error);
        throw error;
    }
};

const add = async (data) => {
    try{
        const response = await axios.post(`${VIDEO}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${VIDEO}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting:', error);
        throw error;
    }
};

const updateTitle = async (id, data) => {
    try{
        const response = await axios.put(`${VIDEO}/updateTitle/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updateTitle:', error);
        throw error;
    }
};

const updateDescription = async (id, data) => {
    try{
        const response = await axios.put(`${VIDEO}/updateDescription/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updateDescription:', error);
        throw error;
    }
};

const updatePng = async (id, data) => {
    try{
        const response = await axios.put(`${VIDEO}/updatePng/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updatePng:', error);
        throw error;
    }
};

const updateUrl = async (id, data) => {
    try{
        const response = await axios.put(`${VIDEO}/updateUrl/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updateUrl:', error);
        throw error;
    }
};

const updatePrice = async (id, data) => {
    try{
        const response = await axios.put(`${VIDEO}/updatePrice/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updatePrice:', error);
        throw error;
    }
};

const videoServices = {
    get,
    byUser,
    byVideo,
    add,
    deleted,
    updateTitle,
    updateDescription,
    updatePng,
    updateUrl,
    updatePrice
};

export default videoServices;