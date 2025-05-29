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
    stats: 'Soul Connection',
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
      "If we could travel anywhere together, where would you choose and why?",
      "What's your deepest insecurity that you feel safe sharing with me?",
      "How has being with me changed your perspective on love?",
      "What's something you've never told anyone else but want to share with me?",
      "What does emotional intimacy mean to you?",
      "When do you feel most vulnerable, and how can I support you?",
      "What's a fantasy or aspiration you have for us as a couple?",
      "How do you want to grow as a person within our relationship?",
      "What's something about yourself you're still discovering?",
      "What's your love language, and how do you want me to express love?",
      "What makes you feel most beautiful/handsome in my eyes?"
    ]
  },
  romanticDares: {
    id: 'romanticDares',
    title: 'Romantic Dares',
    icon: 'kiss',
    color: 'from-red-400 to-rose-500',
    description: 'Sweet and playful challenges to bring you closer',
    stats: 'Passion & Play',
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
      "Tell your partner why you're proud to be with them",
      "Give your partner a sensual hand massage with lotion",
      "Whisper something seductive in your partner's ear",
      "Kiss your partner's neck softly and slowly",
      "Undress your partner with only your eyes for 30 seconds",
      "Give your partner a full-body massage with oils",
      "Take turns describing what you want to do to each other later",
      "Kiss every inch of your partner's face except their lips",
      "Tell your partner your favorite thing about their body",
      "Create a romantic atmosphere and slow dance intimately",
      "Feed each other chocolate or strawberries sensually"
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
    stats: 'Physical Connection',
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
      "Trace 'I love you' on your partner's arm with your finger",
      "Caress your partner's face while looking into their eyes",
      "Run your fingers through your partner's hair slowly",
      "Kiss your partner's shoulders and collarbone gently",
      "Hold your partner from behind and breathe together",
      "Massage your partner's feet while they relax",
      "Touch your partner's body like you're memorizing every curve",
      "Give your partner goosebumps by lightly tracing their skin",
      "Intertwine your fingers and hold hands for five minutes",
      "Place your hand on your partner's heart and feel it beat",
      "Cuddle naked and just enjoy the skin-to-skin contact"
    ]
  },
  spicyQuestions: {
    id: 'spicyQuestions',
    title: 'Spicy Questions',
    icon: 'flame',
    color: 'from-red-500 to-orange-500',
    description: 'Intimate questions to explore desires and deepen passion',
    stats: 'Adults Only',
    subtitle: 'Get Heated',
    questions: [
      "What's your favorite part of my body and why?",
      "What's something you've always wanted to try with me?",
      "Describe your perfect romantic evening with me",
      "What turns you on most about me?",
      "What's your biggest fantasy involving us?",
      "Where's the most adventurous place you'd want to be intimate?",
      "What's something new you'd like to explore together?",
      "How do you like to be kissed?",
      "What's your favorite way for me to touch you?",
      "Describe the most passionate moment we've shared",
      "What drives you wild when I do it?",
      "What's something that instantly makes you think of me?",
      "How do you want me to seduce you?",
      "What's your favorite memory of us being intimate?",
      "What's something you find irresistibly attractive about me?",
      "Describe your ideal morning after spending the night together",
      "What's a secret desire you have about our relationship?",
      "How do you want to surprise me romantically?",
      "What makes you feel most desired by me?",
      "What's something you want more of in our physical relationship?"
    ]
  },
  seductionDares: {
    id: 'seductionDares',
    title: 'Seduction Dares',
    icon: 'fire',
    color: 'from-purple-500 to-red-500',
    description: 'Playful challenges to ignite passion and desire',
    stats: 'Heat Level: Hot',
    subtitle: 'Turn Up Heat',
    questions: [
      "Give your partner a seductive look for 30 seconds without breaking eye contact",
      "Whisper your partner's name in their ear in the most seductive way possible",
      "Kiss your partner's neck for one minute",
      "Tell your partner exactly what you want to do to them tonight",
      "Give your partner a lap dance to an imaginary song",
      "Remove one piece of your partner's clothing very slowly",
      "Massage your partner's inner thighs for two minutes",
      "Kiss your partner passionately for two minutes straight",
      "Tell your partner your favorite thing about making love to them",
      "Give your partner a hickey somewhere only you can see",
      "Describe in detail how you want your partner to touch you",
      "Blindfold your partner and kiss them somewhere unexpected",
      "Take a steamy shower or bath together",
      "Give your partner a full-body massage with oils",
      "Tell your partner your dirtiest fantasy about them",
      "Kiss your partner's body from head to toe",
      "Recreate your first kiss but make it more passionate",
      "Give your partner goosebumps using only your breath",
      "Tell your partner what you love most about their body",
      "Make your partner feel like the most desirable person alive"
    ]
  },
  naughtyChoices: {
    id: 'naughtyChoices',
    title: 'Naughty Choices',
    icon: 'devil',
    color: 'from-red-600 to-pink-600',
    description: 'Provocative choices to explore your wild side together',
    stats: 'Choose Wisely',
    subtitle: 'Be Bold',
    questions: [
      { optionA: "Seduce me with words", optionB: "Seduce me with touch" },
      { optionA: "Make love in the morning", optionB: "Make love at night" },
      { optionA: "Be the dominant one tonight", optionB: "Let me take control" },
      { optionA: "Slow and romantic", optionB: "Passionate and intense" },
      { optionA: "Role play as strangers", optionB: "Be completely ourselves" },
      { optionA: "Make out in public", optionB: "Keep it private" },
      { optionA: "Surprise me spontaneously", optionB: "Plan something elaborate" },
      { optionA: "Lights on", optionB: "Candlelight only" },
      { optionA: "Talk during intimacy", optionB: "Express with sounds only" },
      { optionA: "Focus on foreplay", optionB: "Skip to the main event" },
      { optionA: "Try something completely new", optionB: "Perfect what we love" },
      { optionA: "Wake me up with kisses", optionB: "Let me sleep in your arms" },
      { optionA: "Shower together", optionB: "Massage with oils" },
      { optionA: "Weekend getaway", optionB: "Romantic night at home" },
      { optionA: "Express love physically", optionB: "Express love verbally" }
    ]
  }
};
