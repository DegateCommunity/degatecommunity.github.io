let app = new Vue({
    el: '#app',
    vuetify: new Vuetify,
    methods: {
        darkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
    },
    created: function () {
        this.$vuetify.theme.dark = true;

        // Forge request for the config.json
        let request = new XMLHttpRequest();
        request.open('GET', '../config.json', false);
        request.send(null);

        // Parse JSON
        this.config = JSON.parse(request.responseText);

        // Gitter button
        ((window.gitter = {}).chat = {}).options = {
            room: 'DegateCommunity/Degate'
        };
    },
    data: {
        config: "",
        slides: [
            {
                src: './res/screenshots/1.png',
            },
            {
                src: './res/screenshots/2.png',
            },
            {
                src: './res/screenshots/3.png',
            },
            {
                src: './res/screenshots/4.png',
            },
        ],
    },
})