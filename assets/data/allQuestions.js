export default [
  {
    id: "q0",
    type: "FILL_IN_THE_BLANK",
    parts: [
      {
        id: "1",
        text: "Hola,",
        isBlank: true,
      },
      {
        id: "2",
        text: "me",
        isBlank: true,
      },
      {
        id: "3",
        text: "llamo",
        isBlank: true,
      },
      {
        id: "4",
        text: "Kim",
        isBlank: true,
      },
      {
        id: "5",
        text: "¿Cómo",
        isBlank: true,
      },
      {
        id: "6",
        text: "estás?",
        isBlank: true,
      },
    ],
    options: [ "Kim", "me", "estás?","Hola,", "llamo", "¿Cómo"],
  },
  {
    id: "q1",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: true,
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
  {
    id: "q2",
    type: "OPEN_ENDED",
    text: "¿Como estas",
    answer: "How are you",
  },
  {
    id: "q3",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
    ],
  },
  {
    id: "q4",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "Adios ",
    answer: "Bye",
  },
  {
    id: "q3",
    question: 'Which of these is "the cup"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: "q5",
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: "q6",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
    options: [
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
];
