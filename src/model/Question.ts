export type TTag = 'skip' | 'uncorrect' | 'correct'

export interface TQuestion {
  _id: string;
  content: string;
  type: "single-choice" | "multiple-choice" | "TRUE_FALSE";
  difficult: string;
  options: TOption[];
  correct_answer: number;
  user_choice: number;
  tag: TTag;
}

export interface TQuestionStart extends TQuestion {
  user_choice: number;
}

export interface TOption {
  _id: string;
  text: string;
}

export type TExam = {
  _id: string;
  title: string;
  participant_count: number;
  question_count: number;
  description: string;
  questions: TQuestion[];
  duration: number;
  image: string;
};

export type TExamResult = {
  _id:string;
  questions: TQuestion[];
  title: string;
  userName: string;
  totalPoint: number;
  questionsCount: number;
  questions_count_correct: number;
  createdAt: string;
  questions_count_uncorrect: number;
  skipchoice: number;
};

export type TExamResultPost = {
  title: string;
  questions: TQuestion[];
  userName: string;
};
