import axios, { AxiosResponse } from 'axios';

interface LoginPayload {
  email: string;
  password: string;
}

export class AuthService {
  private readonly API_URL: string = 'http://localhost:5279/api/user/login';
  private readonly LOCAL_STORAGE_KEY: string = 'auth_token';

  async login(payload: LoginPayload): Promise<boolean> {
    try {
      const response: AxiosResponse<{ access_token: string }> = await axios.post(
        `${this.API_URL}/login`,
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
