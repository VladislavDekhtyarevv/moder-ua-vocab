import EventService from "../services/EventService";
import router from "@/router";

export default {
    registration({ commit } : any, user : any) {
        return EventService.registerUser(user).then(({ data } : any) => {
            commit("setUser", data);
            return data;
        },
        (error: any) => {
            throw error.response.data;
        });
    },
    login({ commit } : any, user : any) {
        return EventService.loginUser(user).then(({ data } : any) => {
            commit("setUser", data);
            return data;
        },
        (error: any) => {
            throw error.response.data;
        });
    },
    logout({ commit }: any) {
        return EventService.logout()
            .then(() => {
                commit("clearUserData");
            })
            .catch(() => {
                commit("clearUserData");
            });
    },
    getWords({ commit } : any, params : any) {
        return EventService.getWords(params).then(
            ({ data }: any) => {
                return data;
            },
            (error: any) => {
                throw error.response.data;
            }
        );
    },
    getPersonalWords({ commit } : any, params : any) {
        return EventService.getPersonalWords(params).then(
            ({ data }: any) => {
                return data;
            },
            (error: any) => {
                throw error.response.data;
            }
        );
    },
    createWord({ commit } : any, params : any) {
        return EventService.createWord(params).then(
            ({ data }: any) => {
                commit("showNotification", data);
                return data;
            },
            (error: any) => {
                commit("showNotification", error.response.data);
                throw error.response.data;
            }
        );
    },
    toggleLike({ commit } : any, id : number) {
        return EventService.toggleLike(id).then(
            ({ data }: any) => {
                return data;
            },
            (error: any) => {
                commit("showNotification", error.response.data);
                throw error.response.data;
            }
        );
    },
    toggleDislike({ commit } : any, id : number) {
        return EventService.toggleDislike(id).then(
            ({ data }: any) => {
                return data;
            },
            (error: any) => {
                throw error.response.data;
            }
        );
    },
    showNotification({ commit } : any, data: any) {
        commit("showNotification", data);
    },
    closeNotification({ commit } : any) {
        commit("closeNotification");
    },
};
