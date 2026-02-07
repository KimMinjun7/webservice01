import { useState } from 'react';
import questions from '../data/questions';

function QuizScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('enter');

  const current = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleSelect = (option) => {
    if (animating) return;

    const newAnswers = [...answers, option];
    setAnimating(true);
    setDirection('exit');

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setDirection('enter');
        setTimeout(() => setAnimating(false), 50);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  return (
    <div className="quiz-screen">
      <div className="quiz-header">
        <div className="progress-info">
          <span className="progress-text">{currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`quiz-content ${direction}`}>
        <h2 className="quiz-question">{current.question}</h2>
        <div className="options-list">
          {current.options.map((option, idx) => (
            <button
              key={idx}
              className="option-card"
              onClick={() => handleSelect(option)}
              disabled={animating}
            >
              <span className="option-number">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
