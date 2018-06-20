
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import App from "./src/App";
const routes = require('./routes')


ReactDOM.render(routes(), document.getElementById("app"));
