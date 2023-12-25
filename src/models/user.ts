export interface LoginData {
  email: string;
  password: string;
}

export interface user {

  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: number,
  email: string,

}
export interface LoginResponse {
  token: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    document: {
      id: number;
      citizenship: any;
      license: any;
    };
  };
}