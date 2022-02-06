import ToDoListView from "../views/list";
import ToDoItemForm from "../views/item-form";

import ToDoItemModel from "../models/item";
import ToDoListCollection from "../collections/list";

var Router = Backbone.Router.extend({
    initialize: function (options) {
        this.route("", "index");
        this.route(/^(\d+)\/show$/, "show");
        this.route(/^(\d+)\/edit$/, "edit");
        this.route("new", "new");

        this.container = options.container;

        this.list = new ToDoListCollection();
        new ToDoListView({
            collection: this.list,
            el: this.container
        });
    },

    index: function () {
        this.list.fetch({ reset: true });
    },

    show: function (id) {
        this.list.focus(id);
    },

    new: function () {
        const todoItem = new ToDoItemModel();
        const todoForm = new ToDoItemForm({ model: todoItem });
        this.container.append(todoForm.render().el);
    },

    edit: function (id) {
        const todoForm = new ToDoItemForm({ model: this.list.get(id), el: this.container });
        todoForm.render();
    }
});

export default Router;