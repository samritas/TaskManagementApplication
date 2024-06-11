import axios from 'axios';
const baseUrl = 'http://localhost:8000/task/tasks';

// Passing configuration object to axios
export const getTodo = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}`,
  };
  const response = await axios(configurationObject);
 return response
};
const count = 1 
export const addTodo = async (data) => {
    const configurationObject = {
      method: 'post',
      url: `${baseUrl}`,
    };
    const response = await axios(configurationObject,{
        userId: count ++,
        title:data?.title,
        description:data.description,
        deadline:data?.deadline,
        priority: data?.priority
    });
   return response
  };
export const DeleteTodo = async (id) => {
    const configurationObject = {
      method: 'delete',
      url: `${baseUrl}/${id}`,
    };
    const response = await axios(configurationObject);
   return response
  };
  export const editTodo = async (id) => {
    const configurationObject = {
      method: 'put',
      url: `${baseUrl}/${id}`,
    };
    const response = await axios(configurationObject);
   return response
  };