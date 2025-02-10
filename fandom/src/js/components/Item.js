import { Builder } from "fandom";

export class Item {
    constructor() {
        this.builder = new Builder();
    }

    describe = ({
        id,
        description,
        isCompleted,
        onToggle,
        onDelete
    }) => {
        const clickToggle = () => onToggle(id);
        const clickDelete = () => onDelete(id);

        this.builder.open("p");
        const checkboxAttributes = {};

        if (isCompleted) {
            checkboxAttributes.checked = isCompleted;
        }

        this.builder.checkbox(checkboxAttributes, { change: clickToggle });
        const className = isCompleted ? "complete" : "incomplete";
        this.builder.span({ class: className, id }).text(description).close();
        this.builder.button({ class: "delete" }, { click: clickDelete }).text("Delete").close();
        this.builder.close();
        return this.builder.done();
    };
}

export default Item;