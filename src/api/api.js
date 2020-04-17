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
    return instance.post(`follow/${id}`, {}, {}) },

  unfollow(id) {
    return instance.delete(`follow/${id}`, {}) },
  
  addUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}) },

  setProfile(userId) {
    return instance.get(`profile/${userId}`)
  },

  setAuth() {
    return  instance.get("auth/me", {})
  }
}

