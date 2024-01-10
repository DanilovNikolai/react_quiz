import React from "react";
// icons
import starsIcon from "../assets/icons/stars.svg";

export default function Result({ correctAnswer, questions }) {
  return (
    <div className="result">
      {correctAnswer === questions?.length ? (
        <>
          <div>
            <img src={starsIcon} alt="stars-icon" />
            <h1>Поздравляем!!!</h1>
          </div>
          <div>
            Вы ответили правильно на <span>ВСЕ</span> вопросы!
          </div>
          <div>
            Вы - <span>гуру ReactJS!</span>
          </div>
          <div>Можете собой гордиться! :)</div>
        </>
      ) : (
        <h2>
          {correctAnswer} правильных ответа из {questions?.length}
        </h2>
      )}
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}
