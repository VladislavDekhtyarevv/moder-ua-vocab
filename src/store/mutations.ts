import axios from "axios";

export default {
    setUser(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['X-Authorization'] = `Bearer ${userData.token}`
    },
    showPreloader(state) {
        state.preloader.status = true
    },
    hidePreloader(state) {
        state.preloader.status = false
    },
    setProjects(state, data) {
        console.log(data)
        state.projects = data
        localStorage.setItem('projects', JSON.stringify(data))
    },
    setProject(state, data) {
        state.project = data.data
        localStorage.setItem('project', JSON.stringify(data.data))
    },
    setConfiguration(state, data) {
        state.configuration = data
        localStorage.setItem('configuration', JSON.stringify(data))
    },
    closeNotification(state) {
        state.notification = {
            data: state.notification.data
        }
    },
    showNotification(state, data) {
        state.notification = data
        function clearNotification() {
            state.notification = {
                data: state.notification.data
            }
        }
        setTimeout(clearNotification, 3000);
    },
    clearUserData () {
        window.localStorage.clear();
        location.reload()
    },
}
