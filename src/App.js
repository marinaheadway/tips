import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [advice, setAdvice] = useState("");

  useEffect (()=> {
    const getAdvice = async ()=> {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log (data.activity)
      setAdvice(data.activity)
    }
    getAdvice()
  }, [])

  return (
    <div className="App">
    <div className='container'>
      <h1>Are you bored?</h1>
      </div>
      <div className='container'>
      <h3>Get some advice</h3>
      </div>
      <div className='container'>
      <button >  
       {/* <button onClick={getAdvice}> // не работает такой код */}
        <img src="https://img.icons8.com/dusk/64/idea.png" width="40px" height="40px" alt="idea"/>
        </button>
        </div>
      <div className='container'>
       <p>{advice}</p>
    </div>
    </div>
  );
}

export default App;
