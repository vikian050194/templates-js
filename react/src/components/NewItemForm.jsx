import ItemFormBase from "./ItemFormBase";

class NewItemForm extends ItemFormBase {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        fetch("/api/list/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                isCompleted: false,
                description: this.state.description
            })
        }).then(() => {
            this.setState({ isSubmitted: true });
        });
    }
}

export default NewItemForm;