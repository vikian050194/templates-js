import FormBase from "./ItemFormBase";

class NewItemForm extends FormBase {
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
                description: this.state.description
            })
        }).then(() => {
            this.setState({ isSubmitted: true });
        });
    }
}

export default NewItemForm;