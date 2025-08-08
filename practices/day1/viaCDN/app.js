const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            intro: 'Vuejs is a JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can be used to develop small and medium sized applications.'
        }
    }
})

app.mount('#app');

