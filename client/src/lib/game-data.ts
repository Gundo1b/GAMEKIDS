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
  intimateQuestions: {
    id: 'intimateQuestions',
    title: 'Intimate Questions',
    icon: 'heart',
    color: 'from-rose-400 to-pink-500',
    description: 'Deep questions to discover each other\'s hearts and minds',
    stats: 'Endless Discovery',
    subtitle: 'Connect Deeply',
    questions: [
      "What was your first impression of me, and how has it changed?",
      "What's a dream you've never told me about?",
      "When do you feel most loved by me?",
      "What's something about your past that shaped who you are today?",
      "What's your biggest fear about our future together?",
      "What's one thing you'd like us to experience together that we haven't yet?",
      "How do you want to be comforted when you're feeling down?",
      "What's a childhood memory that still makes you smile?",
      "What's something you admire about the way I handle challenges?",
      "If we could travel anywhere together, where would you choose and why?"
    ]
  },
  romanticDares: {
    id: 'romanticDares',
    title: 'Romantic Dares',
    icon: 'kiss',
    color: 'from-red-400 to-rose-500',
    description: 'Sweet and playful challenges to bring you closer',
    stats: 'Sweet Moments',
    subtitle: 'Be Playful',
    questions: [
      "Give your partner a 30-second massage on their shoulders",
      "Write 'I love you' on your partner's back with your finger and have them guess",
      "Share three things you're grateful for about your partner",
      "Dance together to an imaginary slow song for one minute",
      "Give your partner five genuine compliments",
      "Feed your partner a small treat or snack",
      "Tell your partner about your favorite memory with them",
      "Give your partner a gentle kiss on their forehead",
      "Hold hands and maintain eye contact for 30 seconds without talking",
      "Tell your partner why you're proud to be with them"
    ]
  },
  relationshipChoices: {
    id: 'relationshipChoices',
    title: 'Relationship Choices',
    icon: 'balance-scale',
    color: 'from-purple-400 to-indigo-500',
    description: 'Explore preferences and discover what matters most to both of you',
    stats: 'Tough Choices',
    subtitle: 'Choose Together',
    questions: [
      { optionA: "Plan every detail of our dates", optionB: "Be completely spontaneous" },
      { optionA: "Spend a quiet evening at home", optionB: "Go out for an adventure" },
      { optionA: "Receive love through words", optionB: "Receive love through actions" },
      { optionA: "Travel the world together", optionB: "Build a beautiful home together" },
      { optionA: "Have deep conversations every day", optionB: "Enjoy comfortable silence together" },
      { optionA: "Be able to read each other's minds", optionB: "Always surprise each other" },
      { optionA: "Celebrate anniversaries grandly", optionB: "Appreciate small daily moments" },
      { optionA: "Share all the same interests", optionB: "Have different hobbies to share" },
      { optionA: "Know everything about each other's past", optionB: "Focus only on our future together" },
      { optionA: "Express love through gifts", optionB: "Express love through quality time" }
    ]
  },
  memoryLane: {
    id: 'memoryLane',
    title: 'Memory Lane',
    icon: 'photo',
    color: 'from-amber-400 to-orange-500',
    description: 'Reminisce about your journey together and share precious memories',
    stats: 'Cherished Moments',
    subtitle: 'Remember Together',
    questions: [
      "What's your favorite memory from our first month together?",
      "Describe the moment you knew you had deep feelings for me",
      "What's the funniest thing that's happened to us as a couple?",
      "What's a challenge we've overcome together that made us stronger?",
      "What's your favorite photo of us and why?",
      "What's something I did early in our relationship that impressed you?",
      "What's a tradition we've created together that you love?",
      "What's your favorite way we've celebrated together?",
      "What's a song, movie, or place that always reminds you of us?",
      "What's something about our relationship that makes you feel proud?"
    ]
  },
  dreamsTogether: {
    id: 'dreamsTogether',
    title: 'Dreams Together',
    icon: 'star',
    color: 'from-violet-400 to-purple-500',
    description: 'Share your hopes, dreams, and visions for your future together',
    stats: 'Future Visions',
    subtitle: 'Dream Big',
    questions: [
      "What's one goal you'd like us to achieve together in the next year?",
      "How do you envision our perfect weekend together?",
      "What's a new tradition you'd like to start with me?",
      "Where do you see us in five years?",
      "What's an adventure you'd love for us to embark on together?",
      "What's something new you'd like to learn or try with me?",
      "How would you like us to celebrate our next milestone?",
      "What's a way you'd like us to give back to others together?",
      "What's your ideal way to spend a holiday with me?",
      "What's a dream date you'd love to plan for us?"
    ]
  },
  lovingTouch: {
    id: 'lovingTouch',
    title: 'Loving Touch',
    icon: 'hand-heart',
    color: 'from-pink-400 to-rose-500',
    description: 'Gentle, affectionate gestures to show your love and care',
    stats: 'Tender Moments',
    subtitle: 'Show Love',
    questions: [
      "Hold your partner's hand and trace their palm gently",
      "Give your partner a warm, lingering hug",
      "Brush a strand of hair away from your partner's face",
      "Give your partner a gentle back rub for two minutes",
      "Kiss your partner's hand like royalty",
      "Put your arm around your partner and pull them close",
      "Give your partner butterfly kisses with your eyelashes on their cheek",
      "Massage your partner's temples gently",
      "Hold your partner close and sway together slowly",
      "Trace 'I love you' on your partner's arm with your finger"
    ]
  }
};
