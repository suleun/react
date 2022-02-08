import React, {useEffect, useState} from "react";

function App() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  
  useEffect(()=>{
    console.log(count);
  }, [count, count1]) // count 인자를 지정함으로써 원하는 status 볼 수 있음
  
  const increment = () => {
    setCount(count + 1);
  }


  useEffect(()=>{
    console.log('first rendering');
  }, [])



  return (
    <div className="App">
    <button onClick={increment}>Click</button>
    <button onClick={() => setCount1(count1 + 1)}>Click1</button>
    </div>
  );
}



export default App;
