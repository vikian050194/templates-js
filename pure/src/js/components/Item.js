const Item = ({
    id,
    description,
    isCompleted,
    onClick
}) => {

    const toggle = () => onClick(id);

    const model = (builder) => {
        const className = isCompleted ? "complete" : "incomplete";
        builder.div({ class: className, id }).text(description).onClick(toggle).close();
    };

    return {
        model
    };
};

export default Item;