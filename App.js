/*const heading = React.createElement("h1",
    {id:"heading", xyz:"abc"},
     "Hello World from react!");
     
     console.log(heading); //object
        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);*/

        const parent = React.createElement("div",{id: "prent"},[
            React.createElement("div", 
                {id: "child"},[
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]),
            React.createElement("div", 
                {id: "child2"},[
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]),
        ]);

        console.log(parent);
        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        