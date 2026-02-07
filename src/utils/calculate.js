import loveTypes from '../data/types';

export function calculateScores(answers) {
  const totals = { tendency: 0, conflict: 0, affection: 0, attachment: 0, contact: 0 };

  answers.forEach(({ scores }) => {
    Object.keys(totals).forEach(axis => {
      totals[axis] += scores[axis];
    });
  });

  // 평균 계산 (1~5 범위)
  const count = answers.length;
  const averages = {};
  Object.keys(totals).forEach(axis => {
    averages[axis] = totals[axis] / count;
  });

  return averages;
}

export function determineType(scores) {
  let bestType = null;
  let bestDistance = Infinity;

  Object.values(loveTypes).forEach(type => {
    const distance = Object.keys(scores).reduce((sum, axis) => {
      const diff = scores[axis] - type.profile[axis];
      return sum + diff * diff;
    }, 0);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestType = type.code;
    }
  });

  return bestType;
}
