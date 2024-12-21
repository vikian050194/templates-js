import { Builder } from "fandom";

export class Item {
    constructor() {
        this.builder = new Builder();
    }

    describe = ({
        id,
        description,
        isCompleted,
        onClick
    }) => {
        const toggle = () => onClick(id);
        this.builder.div();
        const checkboxAttributes = {};

        if (isCompleted) {
            checkboxAttributes.checked = isCompleted;
        }

        this.builder.checkbox(checkboxAttributes, { change: toggle });
        const className = isCompleted ? "complete" : "incomplete";
        this.builder.span({ class: className, id }).text(description).onClick(toggle).close();
        this.builder.close();
        return this.builder.done();
    };
}

export default Item;