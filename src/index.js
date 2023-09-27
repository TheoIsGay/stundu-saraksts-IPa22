import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


//Iegut elementu no index.html
const elementsNoHTML = document.getElementById("root");

//Parasto elementu parverss par React sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

//Uz ekrana parada pirmo React komponenti
sakne.render(<App />)