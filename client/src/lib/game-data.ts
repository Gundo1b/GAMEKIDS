export interface TruthOrDareQuestion {
  type: 'truth' | 'dare';
  text: string;
}

export interface WouldYouRatherQuestion {
  optionA: string;
  optionB: string;
}

export interface GameCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  stats: string;
  subtitle: string;
  questions: (string | TruthOrDareQuestion | WouldYouRatherQuestion)[];
}

export const gameData: Record<string, GameCategory> = {
  truthOrDare: {
    id: 'truthOrDare',
    title: 'Truth or Dare',
    icon: 'question-circle',
    color: 'from-red-500 to-red-600',
    description: 'Discover secrets and take on fun challenges!',
    stats: '20 Questions',
    subtitle: 'Ready to Play',
    questions: [
      // Truth Questions (1-10)
      { type: 'truth', text: "What's the most embarrassing thing that's ever happened to you in public?" },
      { type: 'truth', text: "If you could read minds for a day, whose mind would you read first?" },
      { type: 'truth', text: "What's a secret you've never told anyone in this room?" },
      { type: 'truth', text: "What's the worst lie you've ever told?" },
      { type: 'truth', text: "Who in this room would you want to be stranded on a desert island with?" },
      { type: 'truth', text: "What's something you've done that you're proud of but never talk about?" },
      { type: 'truth', text: "If you could change one thing about yourself, what would it be?" },
      { type: 'truth', text: "What's the most childish thing you still do?" },
      { type: 'truth', text: "What's a fear you have that most people would find silly?" },
      { type: 'truth', text: "If you had to delete all but three apps from your phone, which would you keep?" },
      
      // Dare Challenges (11-20)
      { type: 'dare', text: "Do your best impression of someone in the room (no names, let others guess!)" },
      { type: 'dare', text: "Sing the chorus of your favorite song in a funny voice" },
      { type: 'dare', text: "Do 10 jumping jacks while saying the alphabet backwards" },
      { type: 'dare', text: "Act out your morning routine in fast-forward motion" },
      { type: 'dare', text: "Balance a book on your head and walk across the room" },
      { type: 'dare', text: "Tell a joke in the worst accent you can do" },
      { type: 'dare', text: "Do your best robot dance for 30 seconds" },
      { type: 'dare', text: "Pretend to be a news reporter and give a weather forecast" },
      { type: 'dare', text: "Do five different animal sounds and let others guess what they are" },
      { type: 'dare', text: "Spell your name using only your elbows on an imaginary keyboard" }
    ]
  },
  wouldYouRather: {
    id: 'wouldYouRather',
    title: 'Would You Rather',
    icon: 'balance-scale',
    color: 'from-cyan-500 to-cyan-600',
    description: 'Make impossible choices and spark debates!',
    stats: '10 Dilemmas',
    subtitle: 'Choose Wisely',
    questions: [
      { optionA: "Have the ability to fly", optionB: "Be invisible whenever you want" },
      { optionA: "Always know when someone is lying", optionB: "Never be caught in a lie yourself" },
      { optionA: "Live without music", optionB: "Live without movies/TV" },
      { optionA: "Be able to speak all languages", optionB: "Be able to talk to animals" },
      { optionA: "Have unlimited money", optionB: "Have unlimited time" },
      { optionA: "Always be 10 minutes late", optionB: "Always be 20 minutes early" },
      { optionA: "Fight one horse-sized duck", optionB: "Fight 100 duck-sized horses" },
      { optionA: "Only be able to whisper", optionB: "Only be able to shout" },
      { optionA: "Have the worst pain for 5 minutes", optionB: "Have mild pain for 5 hours" },
      { optionA: "Know the date of your death", optionB: "Know the cause of your death" }
    ]
  },
  deepQuestions: {
    id: 'deepQuestions',
    title: 'Deep Questions',
    icon: 'heart',
    color: 'from-blue-500 to-blue-600',
    description: 'Meaningful conversations that bring people closer!',
    stats: '10 Questions',
    subtitle: 'Get Personal',
    questions: [
      "What's a moment in your life that completely changed your perspective?",
      "If you could give your younger self one piece of advice, what would it be?",
      "What's something you believe that most people disagree with?",
      "What does success mean to you personally?",
      "What's a relationship in your life that has shaped who you are today?",
      "If you knew you couldn't fail, what would you attempt?",
      "What's a tradition or value from your childhood that you want to pass on?",
      "When do you feel most like yourself?",
      "What's something you've learned about yourself in the past year?",
      "If you could master one skill overnight, what would it be and why?"
    ]
  },
  bodyPartGame: {
    id: 'bodyPartGame',
    title: 'Body Part Game',
    icon: 'running',
    color: 'from-green-500 to-green-600',
    description: 'Fun physical challenges and silly movements!',
    stats: '10 Actions',
    subtitle: 'Get Moving',
    questions: [
      "Touch your nose with your tongue (or try your best!)",
      "Wiggle your ears without touching them",
      "Clap using only your feet",
      "Point to the ceiling using only your elbow",
      "Nod your head yes while shaking it no",
      "Wink with both eyes at the same time",
      "Touch your toes without bending your knees",
      "Make your shoulders dance to an imaginary beat",
      "Draw a circle in the air using only your hip",
      "High-five someone using only your pinky fingers"
    ]
  }
};
