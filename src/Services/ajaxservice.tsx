

export const API_URL = 'http://localhost:5279/api';

export async function postData(url: string, data: any) {
  const response = await fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const result = await response.json();
  return result;
}


