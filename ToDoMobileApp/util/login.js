import axios from 'axios';
const baseUrl = 'http://localhost:8000/task/tasks';


// Passing configuration object to axios
export const login = async (data) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/auth/login`,
  };
  const response = await axios(configurationObject,{
    username:data?.username,
    password:data?.password
  });
return response
};
