import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8249b980-72b1-45b9-95b6-53955113e41c"
    }
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)        
    }
}
export const ProfileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/` + profileId);
    },
    getStatus(profileId) {
        return instance.get(`profile/status/` + profileId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }

}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    getProfile(profileId) {
        return ProfileAPI.getProfile(profileId);
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha});
    },
    logOut() {
        return instance.delete(`/auth/login`);
    }
}

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}