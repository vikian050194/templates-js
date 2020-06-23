import Router from "./routers/router";

var App = Backbone.View.extend({
    initialize: function () {
        this.router = new Router({
            container: $("body")
        });
    },

    render: function () {
        return this;
    },

    start: function () {
        Backbone.history.start({ pushState: true });

        console.info(`App is started at ${(new Date()).toLocaleString()}`);
    }
});

export default App;