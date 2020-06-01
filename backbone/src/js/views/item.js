var TodoView = Backbone.View.extend({
    tagName: "p",

    events: {
        "change input": "toggleStatus",
        "click .show": "show",
        "click .edit": "edit",
        "click .delete": "delete"
    },

    initialize: function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.remove, this);

        this.model.on("hide", this.remove, this);
    },

    template: function (data) {
        return `<label class="${data.status}"><input type=checkbox ${data.status === "complete" ? "checked" : ""}>${data.description}</label>
        <button class="show">Show</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>`;
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    toggleStatus: function () {
        this.model.toggleStatus();
        Backbone.history.loadUrl(Backbone.history.getFragment());
    },

    show : function(){
        Backbone.history.navigate(`todos/${this.model.get("id")}`, {trigger: true})
    },

    edit : function(){
        Backbone.history.navigate(`todos/${this.model.get("id")}/edit`, {trigger: true})
    },

    delete: function(){
        this.model.destroy();
    }
});

export default TodoView;