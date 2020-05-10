import * as axios from 'axios';

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials : true,
  headers: {
    "API-KEY" : "7dd0f6d7-6dde-49a5-b9d8-991ee7930408"
  }
})

export const API = {
  follow(id) {
    return instance.post(`follow/${id}`, {}, {}) 
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`, {}) 
  },
  
  addUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}) 
  },

  setProfile(userId) {
    return instance.get(`profile/${userId}`)
  },

  setAuth() {
    return  instance.get('auth/me', {})
  },

  setProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`, {})
  },

  udpateProfileStatus(status) {
    return instance.put(`profile/status`, {status: status})
  },

  login(email, password, rememberMe, captcha) {
    return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
  },

  logout() {
    return instance.delete(`/auth/login`)
  },

  updateAvatar(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data' }
    })
  }, 

  updateProfileInfo(profile) {
    return instance.put(`profile`, profile)
  },

  getCaptcha() {
    return instance.get(`security/get-captcha-url`) 
  },

  getUsersChat(userId) {
    return instance.get(`dialogs/${userId}/messages`) 
  },

  sendMessage(userId, message) {
    return instance.post(`dialogs/${userId}/messages`, {body: message} )
  },

  getAlldialogs() {
    return instance.get(`dialogs`)
  },

  refreshLastDialogOnTop(userId) {
    return instance.put(`dialogs/${userId}`)
  },

  getNewMessageCount() {
    return instance.get(`dialogs/messages/new/count`)
  },

  deleteMessage(messageId) {
    return instance.delete(`dialogs/messages/${messageId}`)
  }

}

