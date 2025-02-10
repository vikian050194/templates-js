var NewButton = Backbone.View.extend({
    events: {
        "click button.new": "new"
    },

    template: function () {
        return "<button class=\"new\" >New</button>";
    },

    new: function () {
        Backbone.history.navigate("new", { trigger: true });
    },

    render: function () {
        this.$el.html(this.template());

        return this;
    }
});

export default NewButton;