import ListView from "../views/list";
import ItemForm from "../views/form";

import ItemModel from "../models/item";
import ListCollection from "../collections/list";

var Router = Backbone.Router.extend({
    initialize: function (options) {
        this.route(/^.*/, "index");
        this.route(/^(\d+)\/show$/, "show");
        this.route(/^(\d+)\/edit$/, "edit");
        this.route(/^new$/, "new");

        this.container = options.container;

        this.list = new ListCollection();
    },

    index: function () {
        // TODO prevent unnecessary GET /list call
        if (this.view) {
            this.view.remove();
        }

        this.view = new ListView({ collection: this.list });

        this.container.append(this.view.render().el);

        this.list.fetch({ reset: true });
    },

    show: function (id) {
        // TODO does it make sense to check view or something?
        this.list.focus(id);
    },

    new: function () {
        // TODO check view before "destroy" call
        if (this.view) {
            this.view.remove();
        }

        const item = new ItemModel();
        this.view = new ItemForm({ model: item });

        this.container.append(this.view.render().el);
    },

    edit: function (id) {
        // TODO check view before "destroy" call
        if (this.view) {
            this.view.remove();
        }

        const item = this.list.get(id);
        this.view = new ItemForm({ model: item });

        this.container.append(this.view.render().el);
    }
});

export default Router;