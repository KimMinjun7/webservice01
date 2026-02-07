import { useEffect, useState } from 'react';
import questions from '../data/questions';
import AdBanner from './AdBanner';

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

  const handleBack = () => {
    if (animating || currentIndex === 0) return;

    setAnimating(true);
    setDirection('exit');

    setTimeout(() => {
      setAnswers(answers.slice(0, -1));
      setCurrentIndex(currentIndex - 1);
      setDirection('enter');
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace' || event.key === 'ArrowLeft') {
        const target = event.target;
        const isEditable = target?.isContentEditable;
        const isInput =
          target?.tagName === 'INPUT' ||
          target?.tagName === 'TEXTAREA' ||
          target?.tagName === 'SELECT';

        if (!isEditable && !isInput) {
          event.preventDefault();
          handleBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [animating, currentIndex, answers]);

  return (
    <div className="quiz-screen">
      <div className="quiz-header">
        <div className="progress-info">
          <button
            className="back-button"
            type="button"
            onClick={handleBack}
            disabled={animating || currentIndex === 0}
            aria-label="이전 질문으로"
          >
            <span aria-hidden="true" className="back-icon">←</span>
            이전
          </button>
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
      <AdBanner />
    </div>
  );
}

export default QuizScreen;
