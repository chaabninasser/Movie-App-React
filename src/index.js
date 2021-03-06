import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./data";
require("normalize-css");

require("./styles.css");

ReactDOM.render(<App data={data} />, document.getElementById("root"));
