function IntroScreen({ onContinue }) {
  return (
    <div className="intro-screen">
      <div className="intro-hero">
        <div className="intro-top">
          <div className="intro-badge">서비스 소개</div>
          <button className="intro-back" onClick={onContinue} type="button">
            홈으로
          </button>
        </div>
        <h1 className="intro-title">연애스타일 매칭 테스트</h1>
        <p className="intro-subtitle">
          간단한 질문으로 나의 연애 성향과
          <br />
          어울리는 스타일을 알아보세요.
        </p>
      </div>

      <div className="intro-grid">
        <div className="intro-card">
          <h2>목적</h2>
          <p>나의 연애 성향을 가볍게 진단하고, 결과 유형을 확인합니다.</p>
        </div>
        <div className="intro-card">
          <h2>구성</h2>
          <p>총 10문항, 약 2~3분 소요. 중간에 이전 질문으로 되돌릴 수 있어요.</p>
        </div>
        <div className="intro-card">
          <h2>결과</h2>
          <p>유형, 매칭 포인트, 요약 지표를 한눈에 제공합니다.</p>
        </div>
      </div>

      <div className="intro-cta">
        <button className="start-button" onClick={onContinue}>
          테스트 시작하기
        </button>
        <p className="intro-note">결과는 저장되지 않으며, 기기에만 표시됩니다.</p>
      </div>
    </div>
  );
}

export default IntroScreen;
