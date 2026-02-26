import React from "react";
const Child = React.memo(({onclick})=>{

    console.log("child rerendered")
    return <>
    
    <button onClick={onclick}>click me</button>
    </>;
})

export default Child