import axios from 'axios';

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export async function getTaskList(){
    const response  = await axios.get(VITE_API_ENDPOINT + '/tasks/all', { headers: { 'x-api-key': VITE_API_KEY} });
    return response.data;
}

export async function getTask(id:string){
    const response  = await axios.get(VITE_API_ENDPOINT + '/tasks/' + id, { headers: { 'x-api-key': VITE_API_KEY} });
    return response.data;
}

export async function createTask(data:any){
    const response  = await axios.post(VITE_API_ENDPOINT + '/tasks/', data , { headers: { 'x-api-key': VITE_API_KEY} });
    return response.data;
}

export async function updateTask(data:any, id:string){
    const response  = await axios.put(VITE_API_ENDPOINT + '/tasks/' + id, data , { headers: { 'x-api-key': VITE_API_KEY} });
    return response.data;
}

export async function deleteTask(id:string){
    const response  = await axios.delete(VITE_API_ENDPOINT + '/tasks/' + id, { headers: { 'x-api-key': VITE_API_KEY} });
    return response.data;
}