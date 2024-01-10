import React from "react";

export default function Game({
  currentQuestion,
  onClickVariant,
  questions,
  step,
}) {
  const percent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="quantity">
        Вопрос <b>{currentQuestion?.id}</b> из <b>{questions?.length}</b>
      </div>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1 className="question_title">{currentQuestion?.title}</h1>
      <ul className="question_list">
        {currentQuestion?.variants?.map((variant, index) => (
          <li
            onClick={() => onClickVariant(index)}
            key={variant}
            className="question_item"
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
