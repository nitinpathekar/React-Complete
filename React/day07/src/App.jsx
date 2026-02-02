import { useState } from "react"




function App() {

  // const [name, setName] = useState('');
  // const [email,setEmail]=useState('');

  
  // function handlesubmit(e){
    //   e.preventDefault();
    //   console.log(form)
    // }
    
    const [form ,setForm]=useState({
      name:'',
      email:''
    })

    const [agree,setagree]=useState("true")
    const [gender,setGender]=useState('')

function handleChange(e){
  setForm({
    ...form,[e.target.name]: e.target.value
  })
}

function handleSubmit(e){
  e.preventDefault();
  console.log(form);
  console.log(gender)
}



  return <>
    {/* <input type="text" placeholder="Enter the name" onChange={(e) => setName(e.target.value)} /> */}
    {/* <form onSubmit={handlesubmit}>
    <input type="text"  placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
    <button type="submit">submit</button>
</form> */}
{/* 
    <h1>Hello {email}</h1> */}


    <form onSubmit={handleSubmit}>

      <input name="name" type="text" placeholder="name" value={form.name} onChange={handleChange}/>
      <input name ='email' type="text" placeholder="email"  value={form.email} onChange={handleChange}/>

      <input type="checkbox" checked={agree} onChange={(e)=>setagree(!agree)} />
      <button type="submit">submit</button>

      <br />

      <select
      value={gender} onChange={(e)=>setGender(e.target.value)}
      >

        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
    </form>







  </>
}

export default App