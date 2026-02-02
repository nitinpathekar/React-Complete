
function App() {

  // const fruits=['apple','banana','grapes']

  

  

  const users = [
 { id: 1, name: "Rahul", age: 22 },
  { id: 2, name: "Anita", age: 22 },
  { id: 3, name: "Aman", age: 21 }
  ]




return (
  <>
    {/* <h1>Fruit</h1>

    <ul>
      {
        fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))
      }
    </ul> */}


  <h1>User</h1>
<ul>
{
  users.map((user)=>(
    <li key={user.name}>{user.name} and thir age is {user.age}</li>
  ))
}
</ul>
  </>

);
}

export default App;