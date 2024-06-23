import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {
//         "API-KEY": "4f6b56f6-2e32-4b5d-9a97-7442ad977207"
//     }
// });





const instance = axios.create({
    
    baseURL: 'http://localhost:1000/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });


export default instance;


const oldInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4f6b56f6-2e32-4b5d-9a97-7442ad977207',
        'Content-Type': 'application/json'
    }
});

export {oldInstance};



  export const createUser = async (userData) => {
    
    try {
      const response = await instance.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
      throw error;
    }
  };



// export const authAPI = {
//     login(email, password) {
//         return instance.post('/auth/login', { email, password });
//     },
//     register(email, password) {
//         return instance.post('/auth/register', { email, password });
//     },
// };

export const addComment = async (userId, text, postId) => {
    try {
      const response = await instance.post('/comments', { userId, text, postId });
      return response.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  };




export const authAPI = {
    login(email, password) {
        return axios.post('http://localhost:1000/login', { email, password });
    },
    register(username, email, password) {
        return axios.post('http://localhost:1000/register', { username, email, password });
    }
};


export const followAPI = {
    follow(userId) {
      return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
      return instance.delete(`follow/${userId}`);
    },
    getUsers(page, count) {
      return instance.get(`users?page=${page}&count=${count}`);
    },
    getProfile(userId) {
      console.warn('Obsolete method. Please use profileAPI object.');
      return profileAPI.getProfile(userId);
    }
  };
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status });
    }
};
