import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  withCredentials: true,
});

export default {
    loginUser(user) {
        return apiClient.post('/login' ,user)
    },
    registerUser(user) {
        return apiClient.post('/register' ,user)
    },
    reset(body) {
        return apiClient.post('/forgot-password' ,body)
    },
    updatePass(body) {
        return apiClient.post('/reset/password' ,body)
    },
    getProjects() {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/project`, {withCredentials: true})
    },
    getProjectsPage(page) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/project?page=${page}`, {withCredentials: true})
    },
    uploadFile(fd) {
        console.log(...fd)
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/project/create-from-template`, fd, {headers: { 'content-type': 'multipart/form-data' }})
    },
    updateProject(proj) {
        return axios.put(`${process.env.VUE_APP_BASE_URL_API}/project/${proj.id}`, proj.proj,{withCredentials: true})
    },
    createProject(proj) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/project`, proj,{withCredentials: true})
    },
    createDoor(proj) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/door`, proj,{withCredentials: true})
    },
    duplicateDoor(id) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/door-replicate/${id}`,{withCredentials: true})
    },
    duplicateDoors(ids) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/door-replicate-bulk`, {'ids':ids}, {withCredentials: true})
    },
    deleteDoors(ids) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/door-delete-bulk`, {'ids':ids}, {withCredentials: true})
    },
    validateStepDoor(proj) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/door-validate`, proj,{withCredentials: true})
    },
    updateDoor(proj) {
        return axios.put(`${process.env.VUE_APP_BASE_URL_API}/door/${proj.idDoor}`, proj,{withCredentials: true})
    },
    getProject(id) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/project/${id}`, {withCredentials: true})
    },
    getTemplate() {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/template`, {withCredentials: true, responseType: 'blob'})
    },
    // getTemplate() {
    //     return axios.get(`${process.env.VUE_APP_BASE_URL_API}/template`, {withCredentials: true})
    // },
    getCalculatedValue(values) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/calculated-value`, values,  {withCredentials: true})
    },
    getNewOptions(values) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/co-depends-value`, values,  {withCredentials: true})
    },
    performProject(proj) {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/project/${proj.id}/wishable-date`, proj,  {withCredentials: true})
    },
    deleteDoor(id) {
        return axios.delete(`${process.env.VUE_APP_BASE_URL_API}/door/${id}`,  {withCredentials: true})
    },
    deleteProj(id) {
        return axios.delete(`${process.env.VUE_APP_BASE_URL_API}/project/${id}`,  {withCredentials: true})
    },
    getConfiguration() {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/door-config`, {withCredentials: true})
    },
    getDoorConfiguration(id) {
        return axios.get(`${process.env.VUE_APP_BASE_URL_API}/door/${id}`, {withCredentials: true})
    },
    logout() {
        return axios.post(`${process.env.VUE_APP_BASE_URL_API}/logout`, {withCredentials: true})
    }
}
