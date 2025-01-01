var BaseView = Backbone.View.extend({
    destroy: function () {
        this.undelegateEvents();
        // TODO should I call "removeData" and "unbind"?
        // this.$el.removeData().unbind();

        // this.remove();
        this.$el.empty();
    }
});

export default BaseView;