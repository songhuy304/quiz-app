import { UserAuthDetail, UserDetail, UserSignup } from '@/model/user';
import { API_URL } from '@/utils/constant';
import { getUserAuthenticatedDetail, getUserDetail, removeUserDetail, setUserAuthenticatedDetail, setUserDetail } from '@/utils/localStore';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export interface LoginResponse {
  success: boolean;
  data: {
    user: UserDetail;
  };
}

export interface AuthenticationState {
  authenticatedDetail: UserAuthDetail | null;
  userDetail?: UserDetail | null;
}

const initialState: AuthenticationState = {
  authenticatedDetail: getUserAuthenticatedDetail(),
  userDetail: getUserDetail()
};

export const AuthenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Partial<UserSignup>>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        formData: true,
      }),
    }),
    signup: builder.mutation<void, UserSignup>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
        formData: true,
      }),
    }),
  }),
});

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState as AuthenticationState,
  reducers: {
    reset() {
      return initialState;
    },
    logout(state) {
      const authenticatedDetail = { isAuthenticated: false };
      state.authenticatedDetail = authenticatedDetail;
      setUserAuthenticatedDetail(authenticatedDetail);
      state.userDetail = null;
      removeUserDetail();
    }
  },
  extraReducers(builder) {
    builder.addMatcher(
      AuthenticationApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        const { user } = action.payload.data
        state.userDetail = user as UserDetail;
        const authenticatedDetail = { isAuthenticated: true };
        state.authenticatedDetail = authenticatedDetail;
        setUserAuthenticatedDetail(authenticatedDetail);
        setUserDetail(user);
      },
    );
  },
});

export const SelectAuthenticated = (state: RootState) => state.userSlice.authenticatedDetail?.isAuthenticated;
export const SelectUserDetail = (state: RootState) => state.userSlice.userDetail
export const { reset, logout } = AuthenticationSlice.actions;
export const { useLoginMutation, useSignupMutation } = AuthenticationApi;