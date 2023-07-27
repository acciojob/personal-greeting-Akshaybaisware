
import Reac,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState('');
  const[greeting,setGreeting] = useState('');


  const handleChange = (event) =>{
    setName(event.target.value);
  };
  return (
    <div>
       <label>Enter your name:</label>
       < input type ="text" value={name} onChange={handleChange}></input>
       <p>{"hello " +name+ "!"}</p>

    </div>
  )
}

export default App
