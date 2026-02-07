function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-content">
        <div className="start-emoji">💘</div>
        <h1 className="start-title">나의 연애 스타일은?</h1>
        <p className="start-subtitle">
          10개의 질문으로 알아보는<br />
          나의 연애 유형 & 궁합 테스트
        </p>
        <div className="start-tags">
          <span className="tag">연애 성향</span>
          <span className="tag">갈등 방식</span>
          <span className="tag">애정표현</span>
          <span className="tag">집착/자유도</span>
          <span className="tag">연락 빈도</span>
        </div>
        <button className="start-button" onClick={onStart}>
          테스트 시작하기
        </button>
        <p className="start-note">약 2~3분 소요</p>
      </div>
    </div>
  );
}

export default StartScreen;
