import { UserAuthDetail, UserDetail } from "@/model/user";

const USER_AUTHENTICATED_DETAIL_KEY = "user-authenticated-detail";
const USER_DETAIL_KEY = "user-detail";

export const getUserAuthenticatedDetail = (): UserAuthDetail => {
  const json = localStorage.getItem(USER_AUTHENTICATED_DETAIL_KEY) as string;
  return json ? JSON.parse(json) : {};
};

export const setUserAuthenticatedDetail = (data: UserAuthDetail) => {
  localStorage.setItem(USER_AUTHENTICATED_DETAIL_KEY, JSON.stringify(data));
};

export const getUserDetail = (): UserDetail => {
  const json = localStorage.getItem(USER_DETAIL_KEY) as string;
  return json ? JSON.parse(json) : null;
};

export const setUserDetail = (data: UserDetail) => {
  localStorage.setItem(USER_DETAIL_KEY, JSON.stringify(data));
};

export const removeUserDetail = () => {
  localStorage.removeItem(USER_DETAIL_KEY);
};
