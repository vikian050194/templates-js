var TodoItem = Backbone.Model.extend({
    urlRoot: "/api/list",

    defaults: {
        description: "",
        status: "incomplete"
    },

    toggleStatus: function () {
        if (this.get("status") === "incomplete") {
            this.set({ "status": "complete" });
        } else {
            this.set({ "status": "incomplete" });
        }

        this.save();
    }
});

export default TodoItem;