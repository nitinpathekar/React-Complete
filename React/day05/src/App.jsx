import { useState } from "react";
function App()  {

  // const login= true;
  // if(login){
  //   return <h1>Welcome Back!</h1>
  // }

    // return <h1>Please sign up.</h1>


  const [login, setLogin]= useState (false);

  return (
    <div>

     {/* {login ? <div>welcome! </div>: <div>login please</div>}
     

     <button onClick={() => { setLogin(!login) }}>Toggle Login</button> */}

     {login && <div>Welcome back!</div>}
  <button onClick={() => { setLogin(!login) }}>Toggle Login</button>



     
    </div>
  )
  

}

export default App;