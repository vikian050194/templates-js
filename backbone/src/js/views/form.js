var ItemForm = Backbone.View.extend({
    events: {
        "click button.save": "save",
        "submit": "save"
    },

    template: function (data) {
        return `<form><input placeholder="What do you have to do?" name="description" value="${data.description}" /><button >Save</button></form>`;
    },

    render: function () {
        this.$el.append(this.template(this.model.attributes));

        return this;
    },

    save: function (e) {
        e.preventDefault();
        const newDescription = this.$("input").val();
        this.model.save({ description: newDescription }, {
            // eslint-disable-next-line no-unused-vars
            success: function (model, res, opt) {
                Backbone.history.navigate("/", { trigger: true });
            },
            // eslint-disable-next-line no-unused-vars
            error: function (model, xhr, opt) {
                const errors = JSON.parse(xhr.responseText).errors;
                alert(errors);
            }
        });
    }
});

export default ItemForm;