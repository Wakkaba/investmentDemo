import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INITIAL_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [userData, setUserData] = useState(INITIAL_DATA);
  let handleChange = (inputName, newValue) => {
    setUserData((prevValue) => {
      return {
        ...prevValue,
        [inputName]: +newValue,
      };
    });
  };
  const validInput =
    userData.initialInvestment > 0 &&
    userData.annualInvestment > 0 &&
    userData.expectedReturn > 0 &&
    userData.duration > 0;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} inputData={userData} />
      {validInput ? (
        <Result investmentInfo={userData} />
      ) : (
        <p className="center">Please enter valid data</p>
      )}
    </>
  );
}

export default App;
