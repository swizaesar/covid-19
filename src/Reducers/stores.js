import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { servicesRedux } from "./reducer-services";
import { Provider } from "react-redux";

const store = createStore(servicesRedux, applyMiddleware(thunk));

// store data in provider
const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
