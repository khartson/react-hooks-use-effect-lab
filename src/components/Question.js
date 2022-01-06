import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() =>{
    // useEffect called on timeRemainingChange change

    // check time remaining -> decrement timer OR next q if out of time
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    } else {
      console.log('decrementing');
      const timer = setInterval(() => {
        setTimeRemaining(timeRemaining-1);
      } ,1000)
      
    return (() => {
      clearInterval(timer);
      clearTimeout(); 
    })
    }
  },[timeRemaining])



  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
