import { useState } from "react";


function App(){

  const [count, setCount] = useState(0);


  return (
    <div>
      <button onClick={()=>{setCount(count-1)}}>decrease</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>increase</button>
    </div>
  );

} 

export default App;