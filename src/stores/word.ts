import { defineStore } from 'pinia'
import EventService from "@/services/EventService";

export const useWordStore = defineStore({
    id: 'word',
    state: () => ({
        words: [],
        error: null,
    }),
    actions: {
        async getWords(payload: any) {
            try {
                 EventService.getWords(payload)
                    .then((response) => {
                        console.log(response.data.data)
                        this.words = this.words.concat(response.data.data);
                    })
            } catch (error) {
                console.log(error)
                // this.error = error
            }
        },
    }
})
