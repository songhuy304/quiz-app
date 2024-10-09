export interface UserAuthDetail {
  isAuthenticated?: boolean;
}

export interface UserDetail {
  id: number | string
  username: string
  email: string
}


export interface UserSignup {
  username: string
  password: string
  email: string
}