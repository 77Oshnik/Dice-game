import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [numberSelected, setNumberSelectd] = useState();
  const [currentDice, setCurrentDice] = useState("1");
  const [error, seterror] = useState("");
  const[showRules,setShowRules]=useState(false)

  const genrateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const roleDice = () => {
    if (!numberSelected) {
      seterror("Please select a number");
      return;
    }
    seterror("");
    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (numberSelected == randomNumber) {
      setScore(score + randomNumber);
    } else {
      setScore(score - 2);
    }

    setNumberSelectd(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          numberSelected={numberSelected}
          setNumberSelectd={setNumberSelectd}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
        onClick={()=>{setShowRules(!showRules)}}>{showRules ? "Hide"  : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 10px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
