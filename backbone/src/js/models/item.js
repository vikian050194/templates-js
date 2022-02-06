var TodoItem = Backbone.Model.extend({
    urlRoot: "/api/list",

    defaults: {
        description: "",
        isCompleted: false
    },

    toggleStatus: function () {
        const isCompletedForNow = this.get("isCompleted");
        this.set({ isCompleted: !isCompletedForNow });
        this.save();
    }
});

export default TodoItem;