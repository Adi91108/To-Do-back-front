import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ascend-2xwn.onrender.com/',
});

export const getTasks = () => api.get('/api/tasks');
export const createTask = (task) => api.post('/api/tasks', task);
export const updateTask = (id, task) => api.put(`/api/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/api/tasks/${id}`);


const apis = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default apis;
