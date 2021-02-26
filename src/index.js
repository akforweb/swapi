import React from "react";
import ReactDOM from "react-dom";

import {StylesProvider} from '@material-ui/core/styles';
import Main from "./Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StylesProvider>
        <Main/>
    </StylesProvider>,
    rootElement
);
