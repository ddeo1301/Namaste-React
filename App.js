{/* <div id = "parent">
    <div id = "child1">
        <h1>"Hello World from the React"</h1>
        <h2>""children</h2>
    </div>
    <div id = "child2">
        <h1>"Hello World from the React"</h1>
        <h2>""children</h2>
    </div>
</div> */}

const hea = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Hello World from the React"),
        React.createElement("h3", {}, "Hello World from the React small")
    ]), 
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Hello World from the React"),
        React.createElement("h3", {}, "Hello World from the React small")
    ])
])

const ro = ReactDOM.createRoot(document.getElementById("root"));
ro.render(hea);

















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