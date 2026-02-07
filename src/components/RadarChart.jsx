import { axisLabels } from '../data/types';

function RadarChart({ scores }) {
  const axes = Object.keys(scores);
  const count = axes.length;
  const size = 200;
  const center = size / 2;
  const radius = 80;
  const levels = 5;

  const angleStep = (2 * Math.PI) / count;
  const startAngle = -Math.PI / 2;

  const getPoint = (index, value) => {
    const angle = startAngle + index * angleStep;
    const r = (value / 5) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const gridLevels = [];
  for (let level = 1; level <= levels; level++) {
    const points = axes.map((_, i) => {
      const p = getPoint(i, level);
      return `${p.x},${p.y}`;
    }).join(' ');
    gridLevels.push(points);
  }

  const dataPoints = axes.map((axis, i) => {
    const p = getPoint(i, scores[axis]);
    return `${p.x},${p.y}`;
  }).join(' ');

  const labelPositions = axes.map((_, i) => {
    const angle = startAngle + i * angleStep;
    const labelR = radius + 30;
    return {
      x: center + labelR * Math.cos(angle),
      y: center + labelR * Math.sin(angle)
    };
  });

  return (
    <div className="radar-chart">
      <svg viewBox={`0 0 ${size} ${size}`} className="radar-svg">
        {/* Grid */}
        {gridLevels.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
          />
        ))}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const p = getPoint(i, 5);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={p.x}
              y2={p.y}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="rgba(255, 107, 157, 0.3)"
          stroke="#FF6B9D"
          strokeWidth="2"
        />

        {/* Data points */}
        {axes.map((axis, i) => {
          const p = getPoint(i, scores[axis]);
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#FF6B9D"
            />
          );
        })}

        {/* Labels */}
        {axes.map((axis, i) => (
          <text
            key={i}
            x={labelPositions[i].x}
            y={labelPositions[i].y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="radar-label"
            fontSize="8"
            fill="rgba(255,255,255,0.8)"
          >
            {axisLabels[axis].name}
          </text>
        ))}
      </svg>

      <div className="radar-scores">
        {axes.map(axis => (
          <div key={axis} className="score-row">
            <span className="score-label">{axisLabels[axis].name}</span>
            <div className="score-bar-track">
              <div
                className="score-bar-fill"
                style={{ width: `${(scores[axis] / 5) * 100}%` }}
              />
            </div>
            <div className="score-ends">
              <span>{axisLabels[axis].low}</span>
              <span>{axisLabels[axis].high}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadarChart;
