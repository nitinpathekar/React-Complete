import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [age,setAge]=useState(11)


  // useEffect(() => {
  //   console.log('Page is mounted')

  // },[])
  // useEffect(() => {
  //   console.log('Page is update')
    
  // })
  
    useEffect(() => {
      console.log('age is updated')

      return (()=>{
        console.log('age is unmounted')
      })

    },[age])
  
    // useEffect(() => {
    //   console.log('count is updated')
     
    // },[count])
  


  //nothing

  return <div>
    hello world

  {/* <h1>{age}</h1> */}
    <button onClick={() => setAge(age+1)}>increase age</button>


    <h1>{count}</h1>
    <button onClick={() => setCount(count+1)}>increase count</button>
</div >

}


export default App