import ItemView from "./item";
import NewButton from "./new";

var ListView = Backbone.View.extend({
    initialize: function () {
        this.collection.on("add", this.addOne, this);
        this.collection.on("reset", this.addAll, this);
    },

    addOne: function (todoItem) {
        var itemView = new ItemView({ model: todoItem });
        this.$el.append(itemView.render().el);
    },

    addAll: function () {
        this.$el.empty();
        this.collection.forEach(this.addOne, this);
        const newButton = new NewButton();
        this.$el.append(newButton.render().el);
    }
});

export default ListView;