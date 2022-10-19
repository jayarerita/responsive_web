import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

var root = createRoot(destination);
root.render(
    <div>
        <ToDoList />
    </div>
);