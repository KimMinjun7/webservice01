// 5개 축: tendency(연애성향), conflict(갈등방식), affection(애정표현), attachment(집착/자유도), contact(연락빈도)
// 각 축 점수 범위: 1~5 (1=감성/직면/적극/밀착/잦음, 5=이성/회피/소극/독립/여유)

const questions = [
  {
    id: 1,
    question: "연인과 함께하는 주말, 당신이 가장 원하는 건?",
    options: [
      {
        text: "로맨틱한 카페에서 손 잡고 이야기하기",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 2, contact: 1 }
      },
      {
        text: "각자 하고 싶은 걸 하다가 저녁에 만나기",
        scores: { tendency: 3, conflict: 3, affection: 3, attachment: 5, contact: 4 }
      },
      {
        text: "같이 장보고 집에서 요리해 먹기",
        scores: { tendency: 4, conflict: 2, affection: 2, attachment: 3, contact: 2 }
      },
      {
        text: "새로운 맛집이나 전시회 탐방하기",
        scores: { tendency: 2, conflict: 3, affection: 2, attachment: 3, contact: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "연인이 바빠서 하루 종일 연락이 없다면?",
    options: [
      {
        text: "괜찮아~ 하고 기다리지만 살짝 서운함",
        scores: { tendency: 2, conflict: 3, affection: 2, attachment: 2, contact: 2 }
      },
      {
        text: "나도 내 할 일 하면서 편하게 보냄",
        scores: { tendency: 4, conflict: 4, affection: 4, attachment: 5, contact: 5 }
      },
      {
        text: "\"밥은 먹었어?\" 한 번쯤은 보냄",
        scores: { tendency: 3, conflict: 2, affection: 1, attachment: 2, contact: 1 }
      },
      {
        text: "좀 불안해지고 왜 연락 안 하는지 궁금해함",
        scores: { tendency: 1, conflict: 1, affection: 1, attachment: 1, contact: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "연인과 의견이 다를 때 당신의 스타일은?",
    options: [
      {
        text: "바로 이야기해서 풀고 싶어함",
        scores: { tendency: 2, conflict: 1, affection: 2, attachment: 2, contact: 2 }
      },
      {
        text: "일단 시간을 두고 생각을 정리함",
        scores: { tendency: 4, conflict: 4, affection: 3, attachment: 4, contact: 4 }
      },
      {
        text: "상대 입장을 먼저 들어보고 맞춰줌",
        scores: { tendency: 3, conflict: 3, affection: 2, attachment: 2, contact: 3 }
      },
      {
        text: "논리적으로 서로 의견을 분석하고 토론함",
        scores: { tendency: 5, conflict: 1, affection: 4, attachment: 4, contact: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "사랑한다는 말, 얼마나 자주 하고 싶어?",
    options: [
      {
        text: "매일매일! 말로 표현해야 마음이 전해지지",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 1, contact: 1 }
      },
      {
        text: "특별한 날이나 분위기 좋을 때",
        scores: { tendency: 3, conflict: 3, affection: 3, attachment: 3, contact: 3 }
      },
      {
        text: "말보단 행동으로 보여주는 게 더 중요하지",
        scores: { tendency: 4, conflict: 3, affection: 4, attachment: 3, contact: 4 }
      },
      {
        text: "진심을 담아 가끔 깊게 표현하는 편",
        scores: { tendency: 3, conflict: 2, affection: 2, attachment: 3, contact: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "이상적인 연락 패턴은?",
    options: [
      {
        text: "아침 인사부터 잘 자까지 수시로 연락",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 1, contact: 1 }
      },
      {
        text: "하루에 몇 번, 중요한 이야기 위주로",
        scores: { tendency: 3, conflict: 3, affection: 3, attachment: 3, contact: 3 }
      },
      {
        text: "필요할 때 연락하고, 안 해도 괜찮음",
        scores: { tendency: 4, conflict: 4, affection: 4, attachment: 5, contact: 5 }
      },
      {
        text: "연락보단 만나서 이야기하는 게 좋음",
        scores: { tendency: 2, conflict: 2, affection: 2, attachment: 3, contact: 4 }
      }
    ]
  },
  {
    id: 6,
    question: "연인이 이성 친구와 둘이 밥을 먹는다면?",
    options: [
      {
        text: "솔직히 불편하고 말하겠음",
        scores: { tendency: 1, conflict: 1, affection: 2, attachment: 1, contact: 2 }
      },
      {
        text: "믿으니까 괜찮아! 재밌게 먹고 와",
        scores: { tendency: 3, conflict: 4, affection: 3, attachment: 5, contact: 4 }
      },
      {
        text: "괜찮다고 하지만 내심 좀 신경 쓰임",
        scores: { tendency: 2, conflict: 4, affection: 3, attachment: 2, contact: 3 }
      },
      {
        text: "나도 같이 가면 안 돼? 하고 물어봄",
        scores: { tendency: 2, conflict: 2, affection: 1, attachment: 1, contact: 1 }
      }
    ]
  },
  {
    id: 7,
    question: "연인에게 서운한 점이 생겼을 때?",
    options: [
      {
        text: "감정이 격해지더라도 바로 표현함",
        scores: { tendency: 1, conflict: 1, affection: 1, attachment: 2, contact: 2 }
      },
      {
        text: "차분하게 정리해서 대화를 시도함",
        scores: { tendency: 4, conflict: 2, affection: 3, attachment: 3, contact: 3 }
      },
      {
        text: "먼저 상대 기분을 살피고 타이밍을 봄",
        scores: { tendency: 3, conflict: 3, affection: 2, attachment: 2, contact: 3 }
      },
      {
        text: "그냥 넘기거나 시간이 지나면 잊으려 함",
        scores: { tendency: 3, conflict: 5, affection: 4, attachment: 4, contact: 4 }
      }
    ]
  },
  {
    id: 8,
    question: "연인에게 가장 듣고 싶은 말은?",
    options: [
      {
        text: "\"너 없으면 안 돼, 사랑해\"",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 1, contact: 1 }
      },
      {
        text: "\"네가 있어서 든든해\"",
        scores: { tendency: 3, conflict: 3, affection: 2, attachment: 3, contact: 3 }
      },
      {
        text: "\"네 생각이 정말 멋있어\"",
        scores: { tendency: 5, conflict: 2, affection: 3, attachment: 4, contact: 3 }
      },
      {
        text: "\"넌 자유롭게 해도 돼, 난 널 믿어\"",
        scores: { tendency: 3, conflict: 4, affection: 4, attachment: 5, contact: 5 }
      }
    ]
  },
  {
    id: 9,
    question: "기념일에 대한 당신의 생각은?",
    options: [
      {
        text: "100일, 200일 다 챙겨야지! 서프라이즈도 준비함",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 1, contact: 1 }
      },
      {
        text: "1년 같은 큰 기념일 정도는 챙기고 싶음",
        scores: { tendency: 3, conflict: 3, affection: 2, attachment: 3, contact: 3 }
      },
      {
        text: "날짜보다 평소에 잘하는 게 더 중요함",
        scores: { tendency: 4, conflict: 3, affection: 4, attachment: 4, contact: 4 }
      },
      {
        text: "상대가 중요하게 생각하면 나도 맞춰줌",
        scores: { tendency: 3, conflict: 3, affection: 2, attachment: 2, contact: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "연애에서 가장 중요하게 생각하는 것은?",
    options: [
      {
        text: "설렘과 로맨스! 두근거리는 감정",
        scores: { tendency: 1, conflict: 2, affection: 1, attachment: 2, contact: 2 }
      },
      {
        text: "서로의 자유와 존중",
        scores: { tendency: 4, conflict: 4, affection: 4, attachment: 5, contact: 5 }
      },
      {
        text: "신뢰와 안정감",
        scores: { tendency: 4, conflict: 3, affection: 3, attachment: 3, contact: 3 }
      },
      {
        text: "깊은 대화와 정서적 교감",
        scores: { tendency: 3, conflict: 2, affection: 2, attachment: 3, contact: 2 }
      }
    ]
  }
];

export default questions;
