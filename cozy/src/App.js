import React, {useState} from "react";

function App() {

const[text, setText] = useState('Hello');

const onSubmit = () =>{
  alert('submitted');
}

const onKeyUp = (event) => {
  if(event.keyCode === 13){
    onSubmit();
  }
}

const updateText = () => {
  setText('Bye');
}

  return (
    <div className="App">
    <input onKeyUp={onKeyUp}>

    </input>
     <button onClick={onSubmit}>
       submit
     </button>

     <br/>
     <br/>

     <span>{text}</span>

     <button onClick={updateText}>
       update
     </button>

    </div>
  );
}



export default App;
