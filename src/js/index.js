//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let segundos = 0

setInterval  (() => {
    segundos++
    ReactDOM.createRoot(document.getElementById('app')).render(<Home numero={segundos} />);

}, 1000)
//render your react application

