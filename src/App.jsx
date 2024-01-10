import "./index.scss";
import React, { useState, useEffect } from "react";
import Result from "./components/Result";
import Game from "./components/Game";
import questions from "./questions.json";

function App() {
  const [step, setStep] = useState(
    localStorage.getItem("step") ? JSON.parse(localStorage.getItem("step")) : 0
  );
  const [correctAnswer, setCorrectAnswer] = useState(
    localStorage.getItem("correctAnswer")
      ? JSON.parse(localStorage.getItem("correctAnswer"))
      : 0
  );
  const currentQuestion = questions[step];

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
    localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));

    if (step === questions.length) {
      localStorage.removeItem("step");
      localStorage.removeItem("correctAnswer");
    }
  }, [correctAnswer, step]);

  function onClickVariant(index) {
    setStep((step) => step + 1);
    if (currentQuestion?.correct === index + 1) {
      setCorrectAnswer((correctAnswer) => correctAnswer + 1);
    }
  }

  return (
    <div className="app">
      {step !== questions.length ? (
        <Game
          step={step}
          currentQuestion={currentQuestion}
          questions={questions}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correctAnswer={correctAnswer} questions={questions} />
      )}
    </div>
  );
}

export default App;
