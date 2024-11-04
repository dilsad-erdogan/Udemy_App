import axios from 'axios';
const USER = "http://localhost:3000/user";

const get = async () => {
    try{
        const response = await axios.get(`${USER}/get`);
        return response.data;
    } catch(error) {
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const byId = async (id) => {
    try{
        const response = await axios.get(`${USER}/byId/${id}`);
        return response.data;
    } catch(error) {
        console.error('User services error:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${USER}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const updateRole = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateRole${id}`, data);
        return response.data;
    } catch (error){
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateName${id}`, data);
        return response.data;
    } catch (error){
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const updatePassword = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updatePassword${id}`, data);
        return response.data;
    } catch (error){
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const updateEmail = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateEmail${id}`, data);
        return response.data;
    } catch (error){
        console.error('User services error:', error);
        throw error.response.data;
    }
};

const userService = {
    get,
    byId,
    deleted,
    updateRole,
    updateName,
    updateEmail,
    updatePassword
};

export default userService;