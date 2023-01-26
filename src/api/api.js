import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "3afade31-2ead-40b1-9e2d-ec99681d9515"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
};

export const followAPI = {
    unFollowUser(userId){
        return instance.post(`follow/${userId}`);
    },
    followUser(userId){
        return instance.delete(`follow/${userId}`);
    }
}

export const authAPI = {
    authUser(){
        return instance.get(`auth/me`);
    },
    loginUser(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logoutUser(){
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
   
    getUserProfile(params){
        return instance.get(`profile/${params.userId}`);
    },
    getUserStatus(params){
        return instance.get(`profile/status/${params.userId}`);
    },
    putUserStatus(status){
        return instance.put(`profile/status/`, {status: status});
    }
}