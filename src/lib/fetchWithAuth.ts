// Utility to make authenticated requests with JWT from HttpOnly cookies
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  console.log('[fetchWithAuth] Making request to:', url);
  
  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  };
  
  // Use credentials: 'include' to send HttpOnly cookies automatically
  const requestOptions = {
    ...options,
    headers,
    credentials: 'include' as RequestCredentials,
  };
  
  console.log('[fetchWithAuth] Request options:', requestOptions);
  
  return fetch(url, requestOptions);
}
