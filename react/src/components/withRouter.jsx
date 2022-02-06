import React from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const withRouter = WrappedComponent => (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
};