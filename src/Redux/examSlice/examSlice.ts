import { TExam, TExamResult, TExamResultPost } from "@/model/Question";
import { API_URL } from "@/utils/constant";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ExamsResponse<T> {
  success: boolean;
  data: T;
}

export interface ExamsState {
  exams: TExam[] | null;
}

const initialState: ExamsState = {
  exams: null,
};

export const ExamsApi = createApi({
  reducerPath: "examsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    getExams: builder.mutation<ExamsResponse<TExam[]>, void>({
      query: () => ({
        url: "/api/v1/exams",
        method: "GET",
      }),
    }),
    getExamById: builder.mutation<ExamsResponse<TExam>, string>({
      query: (id) => ({
        url: `/api/v1/exams/${id}`,
        method: "GET",
      }),
    }),
    postExamResult: builder.mutation<ExamsResponse<string>, TExamResultPost>({
      query: (exam) => ({
        url: `/api/v1/examResult/exam-result`,
        method: "POST",
        body: exam,
      }),
    }),
    getExamResultById: builder.mutation<ExamsResponse<TExamResult>, string>({
      query: (id) => ({
        url: `/api/v1/examResult/${id}`,
        method: "GET",
      }),
    }),
    getExamHistory: builder.mutation<ExamsResponse<TExamResult>, { userName:string }>({
      query: ({ userName }) => ({
        url: `/api/v1/examResult/exams-history?userName=${userName}`,
        method: "GET",
      }),
    }),
  }),
});

export const ExamsSlice = createSlice({
  name: "exams",
  initialState: initialState as ExamsState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      ExamsApi.endpoints.getExams.matchFulfilled,
      (state, action) => {
        state.exams = action.payload.data;
      }
    );
  },
});

export const { reset } = ExamsSlice.actions;
export const {
  useGetExamsMutation,
  useGetExamByIdMutation,
  usePostExamResultMutation,
  useGetExamResultByIdMutation,
  useGetExamHistoryMutation
} = ExamsApi;
