/**
 * <div id="parent">
 *      <div id="child">
 *      <h1>"Hi I am tag"</h1>
 *      <h2>"Hi I am h2 tag"</h2>
 *      </div>
        * <div id="child">
        *      <h1>"Hi I am tag"</h1>
        *      <h2>"Hi I am h2 tag"</h2>
        *      </div>
    * </div>
 * 
 * **/

//The same operation when needs to be done in react.

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div", {id:"child1"},
            [React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"I am a h2 tag"),
            ]
        ),
        React.createElement("div", {id:"child2"},
            [React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"I am a h2 tag"),
            ]
        )
    ]
);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));  //root for injecting root into browwser
root.render(parent);