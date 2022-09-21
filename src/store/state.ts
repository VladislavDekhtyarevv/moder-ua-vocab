export default {
    user: {
        data: {},
        token: sessionStorage.getItem("TOKEN"),
    },
    notification: {
        data: {}
    },
    preloader: {
        status: false,
        text: 'Loading...'
    },
    online: true,
    projects: null,
    project: null,
    door: null,
    configuration: null,
}
