
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};


const routes = require('./routes')

ReactDOM.render(<Index />, document.getElementById("index"));
