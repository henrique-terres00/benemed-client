import { api } from '../config/api';

export interface AdminCredentials {
  username: string;
  password: string;
}

class AuthService {
  private tokenKey = '@benemed:token';

  async login(credentials: AdminCredentials): Promise<boolean> {
    try {
      const response = await fetch(`${api.baseURL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Invalid credentials');
      }

      const data = await response.json();
      this.setToken(data.token);
      return true;
    } catch (error) {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      // Decodifica o token para verificar a expiração
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      
      // Verifica se o token expirou
      if (payload.exp * 1000 < Date.now()) {
        this.logout();
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  getAuthHeaders(): HeadersInit {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

export const authService = new AuthService();
