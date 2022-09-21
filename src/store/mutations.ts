import axios from "axios";

export default {
    setUser(state: any, data: any) {
        state.user = data;
        localStorage.setItem('user', JSON.stringify(data))
        axios.defaults.headers.common['X-Authorization'] = `Bearer ${data.token}`
    },
    clearUserData (state: any) {
        state.user = {data: {}, token: null};
        window.localStorage.clear();
    },
    closeNotification(state: any) {
        state.notification = {
            data: state.notification.data
        }
    },
    showNotification(state: any, data: any) {
        state.notification = data
        function clearNotification() {
            state.notification = {
                data: state.notification.data
            }
        }
        setTimeout(clearNotification, 2500);
    },

}
