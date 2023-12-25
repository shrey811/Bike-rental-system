
import axios from 'axios';
import { LoginResponse } from '../models/user';

interface LoginPayload {
  email: string;
  password: string;
}

export class AuthService {
  // [x: string]: any;
  private readonly API_URL: string = 'http://localhost:5279/api';
  private readonly LOCAL_STORAGE_KEY: string = 'auth_token';

  async login(payload: LoginPayload): Promise<boolean> {
    const response = await axios.post<LoginResponse>(`${this.API_URL}/user/login`, payload);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, response.data.token);
    localStorage.setItem('userId', response.data.user.id.toString())
    return true;
  } catch(error: any) {
    console.error(error);
    return false;
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



