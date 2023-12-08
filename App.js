import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Hello World from the React"),
        React.createElement("h3", {}, "Hello World from the React small")
    ]), 
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Hello World from the React"),
        React.createElement("h3", {}, "Hello World from the React small")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

















// const hea = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [
//             React.createElement("h1",{},"Hello World from the Nested React "),
//             React.createElement("h3",{},"Hello World from the Nested React "),
//             React.createElement("h5",{},"Hello World from the Nested React ")
//         ]
//     )
// )

// // const hea = React.createElement(
// //     "h1",
// //     {id:"heading"},
// //     "Hello World from the React"
// // )

// const ro = ReactDOM.createRoot(document.getElementById("root"));

// ro.render(hea);