const loveTypes = {
  R: {
    code: "R",
    name: "달달한 로맨티스트",
    emoji: "💕",
    color: "#FF6B9D",
    gradient: "linear-gradient(135deg, #FF6B9D, #FF8E53)",
    description: "당신은 사랑을 온몸으로 표현하는 로맨티스트! 매일 사랑한다는 말을 하고, 기념일을 꼼꼼히 챙기며, 연인과의 달콤한 시간을 가장 소중히 여겨요. 감성적이고 따뜻한 당신의 연애는 늘 설렘으로 가득합니다.",
    traits: ["애정표현 풍부", "연락 자주", "감성적", "기념일 중시", "스킨십 좋아함"],
    bestMatch: ["D", "I"],
    worstMatch: ["F"],
    // 대표 축 프로필 (1~5, 낮을수록 감성/직면/적극/밀착/잦음)
    profile: { tendency: 1.5, conflict: 2, affection: 1.5, attachment: 1.5, contact: 1.5 }
  },
  F: {
    code: "F",
    name: "자유로운 탐험가",
    emoji: "🦋",
    color: "#4ECDC4",
    gradient: "linear-gradient(135deg, #4ECDC4, #44B09E)",
    description: "당신은 연애에서도 자유를 사랑하는 탐험가! 서로의 개인 시간을 존중하고, 각자의 삶을 풍요롭게 가꾸는 것이 건강한 관계라고 믿어요. 느긋하고 여유로운 연애 스타일로, 상대에게 편안한 안식처가 되어줍니다.",
    traits: ["독립적", "개인 시간 중시", "느긋한 연락", "자유로운 관계", "신뢰 기반"],
    bestMatch: ["S", "I"],
    worstMatch: ["R", "P"],
    profile: { tendency: 4, conflict: 4, affection: 4, attachment: 5, contact: 5 }
  },
  S: {
    code: "S",
    name: "든든한 현실주의자",
    emoji: "🏔️",
    color: "#6C7B95",
    gradient: "linear-gradient(135deg, #6C7B95, #536976)",
    description: "당신은 안정적이고 실용적인 현실주의자! 화려한 이벤트보다 일상 속 소소한 배려를 중시하고, 갈등이 생기면 차분하게 해결하려 해요. 믿음직하고 꾸준한 당신의 사랑은 시간이 갈수록 깊어집니다.",
    traits: ["안정적", "실용적", "차분한 갈등 해결", "꾸준한 사랑", "현실적"],
    bestMatch: ["F", "D"],
    worstMatch: ["P"],
    profile: { tendency: 4, conflict: 3, affection: 3.5, attachment: 3.5, contact: 3.5 }
  },
  P: {
    code: "P",
    name: "열정적인 불꽃연애파",
    emoji: "🔥",
    color: "#FF4757",
    gradient: "linear-gradient(135deg, #FF4757, #FF6348)",
    description: "당신은 사랑에 올인하는 열정파! 감정 표현이 강렬하고, 연애에 온 에너지를 쏟아요. 드라마 같은 사랑을 꿈꾸며, 기쁨도 슬픔도 크게 느끼는 당신은 연인에게 잊지 못할 사랑을 선물합니다.",
    traits: ["감정 표현 강렬", "열정적", "드라마틱", "올인형", "감수성 풍부"],
    bestMatch: ["D", "R"],
    worstMatch: ["F", "S"],
    profile: { tendency: 1, conflict: 1, affection: 1, attachment: 1.5, contact: 1.5 }
  },
  I: {
    code: "I",
    name: "사려깊은 지성파",
    emoji: "📚",
    color: "#7C5CBF",
    gradient: "linear-gradient(135deg, #7C5CBF, #6366F1)",
    description: "당신은 대화와 소통을 가장 중시하는 지성파! 깊은 대화를 통해 서로를 이해하고, 논리적으로 문제를 풀어가려 해요. 상대의 생각과 가치관에 관심이 많으며, 정서적 교감을 통해 사랑을 느낍니다.",
    traits: ["대화 중시", "논리적", "깊은 소통", "가치관 공유", "사려깊음"],
    bestMatch: ["R", "F"],
    worstMatch: ["P"],
    profile: { tendency: 4.5, conflict: 1.5, affection: 3, attachment: 3.5, contact: 3 }
  },
  D: {
    code: "D",
    name: "헌신적인 보호자",
    emoji: "🛡️",
    color: "#2ED573",
    gradient: "linear-gradient(135deg, #2ED573, #26de81)",
    description: "당신은 연인을 위해 아낌없이 헌신하는 보호자! 상대를 먼저 생각하고, 세심하게 챙기며, 갈등 상황에서도 상대의 마음을 먼저 살펴요. 당신의 따뜻한 보살핌은 연인에게 세상에서 가장 안전한 울타리가 됩니다.",
    traits: ["상대 중심", "배려 깊음", "챙기는 스타일", "희생적", "따뜻함"],
    bestMatch: ["R", "P"],
    worstMatch: ["F"],
    profile: { tendency: 2.5, conflict: 3, affection: 1.5, attachment: 2, contact: 2 }
  }
};

export const axisLabels = {
  tendency: { name: "연애 성향", low: "감성적", high: "이성적" },
  conflict: { name: "갈등 방식", low: "직면형", high: "회피형" },
  affection: { name: "애정표현", low: "적극적", high: "소극적" },
  attachment: { name: "집착/자유도", low: "밀착형", high: "독립형" },
  contact: { name: "연락 빈도", low: "자주 연락", high: "여유 연락" }
};

export default loveTypes;
