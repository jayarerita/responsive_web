import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IPAddressContainer from "./IPAddressContainer";

var destination  = document.querySelector("#container");


const root = createRoot(destination);

root.render(
    <div>
        <IPAddressContainer />
    </div>,
);