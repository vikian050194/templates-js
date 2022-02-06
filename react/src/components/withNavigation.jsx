import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const withNavigation = WrappedComponent => (props) => {
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} />;
};