import TodoItem from "./../models/item";

var TodoList = Backbone.Collection.extend({
    url: "/api/list",
    
    model: TodoItem,
    
    comparator: function (a, b) {
        return a.get("status") < b.get("status");
    },

    initialize: function () {
        this.on("remove", this.hideModel);
    },

    hideModel: function (model) {
        model.trigger("hide");
    },

    focus: function (id) {
        this.models.filter(m => m.id !== id).forEach(this.hideModel);
    }
});

export default TodoList;