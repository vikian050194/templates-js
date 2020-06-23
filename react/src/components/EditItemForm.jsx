import FormBase from "./ItemFormBase";

class EditItemForm extends FormBase {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`/api/list/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((item) => {
                this.setState({ ...item, isLoading: false });
            });
    }

    onSubmit(e) {
        e.preventDefault();

        fetch(`/api/list/${this.props.match.params.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                isCompleted: this.state.isCompleted,
                description: this.state.description
            })
        }).then(() => {
            this.setState({ isSubmitted: true });
        });

    }
}

export default EditItemForm;