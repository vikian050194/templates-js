import React, { useState } from "react";

export const FunctionalComponent = ({ match }) => {
    const id = parseInt(match.params.id);
    const [sid, setSid] = useState(id);

    const onClick = () => {
        setSid(sid + 1);
    };

    return (
        <>
            <h1>{sid}</h1>
            <button onClick={onClick}>+1</button>
        </>
    );
};

export default FunctionalComponent;