import {useState} from 'react'

function App(){

    // const [message, setMessage] = useState("Hello");\
    // const [name, setName] = useState("Your name");
 
  function greet(name){
    alert("hello " + name);
  }

  return (
    
    // <div>
    //   <h1>{message}</h1>
    //  <button onClick={() => setMessage("Welcome to React 20 days")}>change text</button>
    // </div>

    <>
    {/* <input type="text" onChange={(event)=> setName(event.target.value)}  placeholder='name' />
    <h2>hello! {name}</h2> */}
    <button onClick={() => greet("Nitin")}>greet</button>


    
    </>
  );
}


export default App;