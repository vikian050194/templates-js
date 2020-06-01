import ToDoItemView from "./item";

var TodoView = Backbone.View.extend({
    events: {
        "click button.new": "new"
    },

    template: function () {
        return `<button class="new" >New</button>`;
    },

    initialize: function () {
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.addAll, this);
    },

    addOne: function (todoItem) {
        var todoView = new ToDoItemView({ model: todoItem });
        this.$el.append(todoView.render().el);
    },

    addAll: function () {
        this.$el.empty();
        this.$el.append(this.template());
        this.collection.forEach(this.addOne, this);
    },

    new: function () {
        Backbone.history.navigate("todos/new", { trigger: true });
    }
});

export default TodoView;