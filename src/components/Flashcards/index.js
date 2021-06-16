import React, { useState } from 'react';
import './styles.scss';
import classnames from 'classnames';
import questions from '../../data';

const Flashcards = () => {
  const [isActive, setActive] = useState(false);

  const flipCard = () => {
    setActive(!isActive);
  };

  const [index, setIndex] = useState(0);

  const clickPrev = () => {
    setIndex(index > 0 ? index - 1 : 0);
  };
  const clickNext = () => {
    setIndex(index < questions.length - 1 ? index + 1 : questions.length - 1);
  };

  return (
    <div className="flashcards">
      <div className="card-container">
        <button className="arrow-button" type="button" onClick={clickPrev}>
          <p>⬅️</p>
        </button>
        <button type="button" onClick={flipCard}>
          <div className="flip-card">
            <div
              className={classnames({
                flip: isActive,
                'flip-card-inner': true,
              })}
            >
              <div className="flip-card-front">
                <div className="card-content">
                  <p>QUESTION {index}</p>
                  <h1 className="title"> {questions[index].name}</h1>
                  <p>TOTAL {questions.length}</p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="card-content">
                  <p>QUESTION {index}</p>
                  <ul>
                    {questions[index].pattern.map(p => (
                      <li>
                        <h1 className="title">{p}</h1>
                      </li>
                    ))}
                  </ul>
                  <p>TOTAL {questions.length}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
        <button className="arrow-button" type="button" onClick={clickNext}>
          <p>➡️</p>
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
