import React, {useState} from "react";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () =>{
    alert('submitted');
  }

  return (
    <div className="App">
    <form onSubmit={onSubmit}>
      <input 
      placeholder="UserName" 
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}>

      </input>

      <br/>
      <input 
      placeholder="Password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      >

      </input><br/>


      <button type="submit">
        login
      </button>

     </form>

    </div>
  );
}



export default App;
