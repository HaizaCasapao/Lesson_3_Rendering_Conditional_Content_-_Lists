const app = Vue.createApp({
    data() {
        return {
        inputTask: '',
        tasks: [],
        toggler: 'Hide',
        tn: false,
        };
    },

    methods: {
        addTasks() {
            this.tasks.push(this.inputTask)
        },
        ToggleBtn() {
            this.tn = !this.tn

            if (this.tn === true) {
                this.toggler = 'Show List'
            }
            else {
                this.toggler = 'Hide'
            }
        }
    },
});

app.mount('#assignment');