import "./App.css";
import UserInput from "./Components/Userinput";
import UserOutput from "./Components/Useroutput";
import React, {useState} from 'react'

// Using the react hook to manipulate the state

function App (){
  const [userInput, setUserInput] = useState("wandecoal");
// created the username value to a name a user enter
  const changeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="bg-blue-400 h-screen grid place-content-center gap-4">
      <UserInput onChange={changeHandler} userInput={userInput}></UserInput>
      <h4 className="text-3xl text-white">User Output</h4>
      <UserOutput username={userInput} />
    </div>
  )
}

export default App;
