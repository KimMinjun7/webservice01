import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { calculateScores, determineType } from './utils/calculate';
import './App.css';

const KAKAO_APP_KEY = '2f6903f0f541454bae171181f0594e57';

function App() {
  const [screen, setScreen] = useState('start');

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
    }
  }, []);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleIntroContinue = () => {
    setScreen('start');
  };

  const handleIntroOpen = () => {
    setScreen('intro');
  };

  const handleComplete = (answers) => {
    const scores = calculateScores(answers);
    const typeCode = determineType(scores);
    setResult({ typeCode, scores });
    setScreen('result');
  };

  const handleRestart = () => {
    setResult(null);
    setScreen('start');
  };

  return (
    <div className="app">
      {screen === 'intro' && <IntroScreen onContinue={handleIntroContinue} />}
      {screen === 'start' && (
        <StartScreen
          onStart={handleStart}
          onIntro={handleIntroOpen}
        />
      )}
      {screen === 'quiz' && <QuizScreen onComplete={handleComplete} />}
      {screen === 'result' && (
        <ResultScreen
          typeCode={result.typeCode}
          scores={result.scores}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
