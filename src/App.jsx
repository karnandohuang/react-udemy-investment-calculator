import {useState} from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import InputForm from "./components/InputForm.jsx";

function App() {
    const [inputData, setInputData] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12
    })
    const handleInputDataChange = (identifier, val) => {
        setInputData(prevInputData => {
            const newInputData = {
                ...prevInputData,
                [identifier]: val
            }
            return newInputData
        });
    }

    const isInputValid = inputData.duration >= 1


  return (
    <>
        <Header />
        <InputForm inputData={inputData} onInputDataChange={handleInputDataChange} />
        {!isInputValid && <p className="center">Please enter duration greater than 0</p>}
        {isInputValid && <Results inputData={inputData}/>}
    </>
  )
}

export default App
