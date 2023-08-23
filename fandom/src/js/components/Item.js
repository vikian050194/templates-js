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
        const className = isCompleted ? "complete" : "incomplete";
        this.builder.div({ class: className, id }).text(description).onClick(toggle).close();
        return this.builder.done();
    };
}

export default Item;