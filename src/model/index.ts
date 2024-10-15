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

export type TResponseError = {
  status: number;
  data: {
    data: Error[] | string;
    success: string;
  };
};

type Error = {
  type: string;
  value: string;
  msg: string;
  path: string;
};
