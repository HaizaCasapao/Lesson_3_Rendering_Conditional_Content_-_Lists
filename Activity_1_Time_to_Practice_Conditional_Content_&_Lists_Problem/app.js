const app = Vue.createApp({
    data() {
        return {
        inputTask: '',
        tasks: [],
        toggler: 'Hide',
        tn: false,
        };
    },
});

app.mount('#assignment');