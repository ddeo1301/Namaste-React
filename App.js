import React from "react";
import ReactDOM from "react-dom/client";

const elem  = <span>React Element span tag Used</span>

const title = (
      <h1 className = "head" tabIndex = "5">
          {elem}
          Hello from jsx in react
     </h1>
);

const Title1 = () => (
     <h1 className = "head" tabIndex = "5">
         Hello from jsx in react
    </h1>
);

const Title2 = () => (
     <h1 className = "head" tabIndex = "5">
         Hello from jsx in react
    </h1>
);

const HeadingComponent1 = () => (
     <div id = "container">
          {title}
          {Title1()}
          <Title1></Title1>
          <Title1/>
          <Title2/>
          {345+456}
          <h1 className="heading"> Functional Component example in react</h1>
     </div>   
)

const title5 = (
     <h1 className = "head" tabIndex = "5">
         {elem}
         Hello from jsx in react
         <HeadingComponent1/>
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title5)
root.render(<HeadingComponent1/>);
