import React, {useState} from "react"
import './App.css'
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

const App = () => {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });  

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
}

const isInputValid = userInput.duration >= 1; 

  return (
    <>
      <Header />
      <UserInput
        onChange={handleChange}
        userInput={userInput}
      />
      {
        isInputValid ? (
<Results
        input={userInput}
      />
        ) : (
          <p className="center">
            Please enter duration greater than 0
          </p>
        )
      }
      
    </>
  )
}

export default App
