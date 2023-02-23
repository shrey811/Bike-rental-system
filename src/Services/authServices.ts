// import axios, { AxiosResponse } from 'axios';

import axios, { AxiosResponse } from "axios";

interface LoginPayload {
  email: string;
  password: string;
}

export class AuthService {
  private readonly API_URL: string = 'https://localhost:7111/api';
  private readonly LOCAL_STORAGE_KEY: string = 'auth_token';

  async login(payload: LoginPayload): Promise<boolean> {
    try {
      const response: AxiosResponse<{ access_token: string }> = await axios.post(
        `${this.API_URL}/user/login`,
        payload
      );

      localStorage.setItem(this.LOCAL_STORAGE_KEY, response.data.access_token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
//  export class AuthService {
//     private readonly AUTH_TOKEN_KEY = 'authToken';
  
//     public isAuthenticated(): boolean {
//       const authToken = localStorage.getItem(this.AUTH_TOKEN_KEY);
//       return !!authToken;
//     }
  
//     public async login(email: string, password: string): Promise<string> {
//       // make API call to authenticate user
//       const response = await axios.post('/login', { email, password });
  
//       // store the token in local storage
//       const authToken = response.data.token;
//       localStorage.setItem(this.AUTH_TOKEN_KEY, authToken);
  
//       // return the token for future API requests
//       return authToken;
//     }
  
//     public logout(): void {
//       localStorage.removeItem(this.AUTH_TOKEN_KEY);
//     }
//   }
  
 
  