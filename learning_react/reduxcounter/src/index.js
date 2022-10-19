import React, {Component} from "react";
import {createRoot} from "react-dom/client";
//import { configureStore } from '@reduxjs/toolkit'
import {createStore} from "redux"
import {Provider} from "react-redux";
import counter from "./reducer";
import App, {connectedComponent1} from "./App";
import "./index.css";

var destination = document.querySelector("#container");

//store
const store = createStore(counter);
/*
const store = configureStore({
    reducer: {
        counterRedux: counter,
    }
});
*/

const root = createRoot(destination);

root.render(
    <Provider store={store}>
        <App />
        <App />
    </Provider>
);