export type TypeQuestion = {
  id: number;
  type: string;
  question_text: string;
  options: Options[];
  correct_answer: number;
};

export type Options = {
  id: string;
  text: string;
};

export type TypeQuestionSucess = TypeQuestion & {
  myChoice: number | null;
};

