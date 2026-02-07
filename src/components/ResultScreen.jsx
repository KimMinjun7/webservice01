import loveTypes from '../data/types';
import RadarChart from './RadarChart';
import AdBanner from './AdBanner';

function ResultScreen({ typeCode, scores, onRestart }) {
  const myType = loveTypes[typeCode];
  const bestMatches = myType.bestMatch.map(code => loveTypes[code]);
  const worstMatches = myType.worstMatch.map(code => loveTypes[code]);

  const handleKakaoShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      fallbackShare();
      return;
    }

    const bestNames = bestMatches.map(m => `${m.emoji} ${m.name}`).join(', ');
    const pageUrl = window.location.href;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나의 연애 스타일: ${myType.emoji} ${myType.name}`,
        description: `${myType.description.slice(0, 80)}...\n\n잘 맞는 타입: ${bestNames}`,
        imageUrl: 'https://img.icons8.com/clouds/400/hearts.png',
        link: {
          mobileWebUrl: pageUrl,
          webUrl: pageUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트하기 💘',
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
      ],
    });
  };

  const fallbackShare = async () => {
    const text = `나의 연애 스타일은 "${myType.emoji} ${myType.name}"!\n연애스타일 매칭 테스트로 알아보세요 💘\n${window.location.href}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: '연애스타일 테스트 결과', text });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        alert('결과가 클립보드에 복사되었어요!');
      } catch {
        alert(text);
      }
    }
  };

  return (
    <div className="result-screen">
      <div className="result-header">
        <p className="result-label">당신의 연애 스타일은</p>
        <div className="result-type-card" style={{ background: myType.gradient }}>
          <span className="result-emoji">{myType.emoji}</span>
          <h1 className="result-type-name">{myType.name}</h1>
          <span className="result-type-code">Type {myType.code}</span>
        </div>
      </div>

      <div className="result-description">
        <p>{myType.description}</p>
      </div>

      <div className="result-traits">
        {myType.traits.map((trait, i) => (
          <span key={i} className="trait-tag" style={{ borderColor: myType.color }}>
            {trait}
          </span>
        ))}
      </div>

      <div className="result-section">
        <h3 className="section-title">📊 나의 연애 성향 분석</h3>
        <RadarChart scores={scores} />
      </div>

      <AdBanner />

      <div className="result-section">
        <h3 className="section-title">💚 잘 맞는 타입</h3>
        <div className="match-cards">
          {bestMatches.map(match => (
            <div key={match.code} className="match-card best">
              <span className="match-emoji">{match.emoji}</span>
              <span className="match-name">{match.name}</span>
              <span className="match-code">Type {match.code}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="result-section">
        <h3 className="section-title">💔 안 맞는 타입</h3>
        <div className="match-cards">
          {worstMatches.map(match => (
            <div key={match.code} className="match-card worst">
              <span className="match-emoji">{match.emoji}</span>
              <span className="match-name">{match.name}</span>
              <span className="match-code">Type {match.code}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="result-actions">
        <button className="action-button primary" onClick={onRestart}>
          다시 테스트하기
        </button>
        <button className="action-button kakao" onClick={handleKakaoShare}>
          <svg className="kakao-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#3C1E1E" d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.75 4.93 4.38 6.24l-1.12 4.16c-.1.36.32.65.64.44l4.84-3.2c.42.04.84.06 1.26.06 5.52 0 10-3.36 10-7.7C22 6.36 17.52 3 12 3z"/>
          </svg>
          카카오톡으로 공유하기
        </button>
        <button className="action-button secondary" onClick={fallbackShare}>
          다른 방법으로 공유하기
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
