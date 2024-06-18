import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4f6b56f6-2e32-4b5d-9a97-7442ad977207"
    }
});

export const followAPI = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
        
    }

};

export const profileAPI = {
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI.')
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`);

    },

    updateStatus(status){
        return instance.put(`profile/status`,{status:status});

    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};
