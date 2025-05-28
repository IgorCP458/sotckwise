// utils/fetchWithAuth.ts
import { logoutAndRedirect } from "./logout";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (response.status === 401) {
      alert("Sua sessão expirou, faça login novamente.");
      logoutAndRedirect();
    }

    return response;
  } catch (error) {
    console.error("Erro na requisição", error);
    throw error;
  }
}