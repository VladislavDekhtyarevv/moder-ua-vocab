import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  withCredentials: true,
});

export default {
    registerUser(user: any) {
        return apiClient.post('/register' ,user)
    },
    loginUser(user: any) {
        return apiClient.post('/login' ,user)
    },
    logout() {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/logout`, {withCredentials: true})
    },
    getWords(params : any) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/words?page=${params.page}&sort=${params.sort}${params.text ?'&text=' + params.text: '' }`, {withCredentials: true})
    },
    getPersonalWords(params : any) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/personal-words?page=${params.page}&sort=${params.sort}${params.text ?'&text=' + params.text: '' }`, {withCredentials: true})
    },
    getLikedWords(params : any) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/liked-words?page=${params.page}&sort=${params.sort}${params.text ?'&text=' + params.text: '' }`, {withCredentials: true})
    },
    createWord(params : any) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/words`, params, {withCredentials: true})
    },
    deleteWord(id : any) {
        return axios.delete(`${process.env.VUE_APP_BASE_URL_API}/words/${id}`, {withCredentials: true})
    },
    toggleLike(id : number) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/toggle-like`, {id:id}, {withCredentials: true})
    },
    toggleDislike(id : number) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/toggle-dislike`, {id:id}, {withCredentials: true})
    },
}
