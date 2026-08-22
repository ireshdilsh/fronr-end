const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api').replace(/\/$/, '');
const TOKEN_KEY = 'cosmosphere.accessToken';
const USER_KEY = 'cosmosphere.user';

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

function saveSession(auth) {
  localStorage.setItem(TOKEN_KEY, auth.accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(auth.user));
  return auth;
}

async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const token = getAccessToken();
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_BASE_URL}${path}`, {...options, headers});
  if (!response.ok) {
    let message = `Request failed (${response.status})`;
    try {
      const error = await response.json();
      message = error.message || error.error || message;
    } catch {
      // Some Spring errors have no JSON body.
    }
    throw new Error(message);
  }
  if (response.status === 204) return null;
  return response.json();
}

export const authApi = {
  async register(payload) {
    return saveSession(await request('/v1/auth/register', {method: 'POST', body: JSON.stringify(payload)}));
  },
  async login(payload) {
    return saveSession(await request('/v1/auth/login', {method: 'POST', body: JSON.stringify(payload)}));
  },
  me() {
    return request('/v1/auth/me');
  }
};

export const postsApi = {
  list() {
    return request('/v1/posts');
  },
  get(id) {
    return request(`/v1/posts/${id}`);
  },
  create(payload) {
    return request('/v1/posts', {method: 'POST', body: JSON.stringify(payload)});
  },
  update(id, payload) {
    return request(`/v1/posts/${id}`, {method: 'PUT', body: JSON.stringify(payload)});
  },
  remove(id) {
    return request(`/v1/posts/${id}`, {method: 'DELETE'});
  },
  addImage(postId, payload) {
    return request(`/v1/posts/${postId}/images`, {method: 'POST', body: JSON.stringify(payload)});
  },
  updateImage(postId, imageId, payload) {
    return request(`/v1/posts/${postId}/images/${imageId}`, {method: 'PUT', body: JSON.stringify(payload)});
  },
  removeImage(postId, imageId) {
    return request(`/v1/posts/${postId}/images/${imageId}`, {method: 'DELETE'});
  }
};

export const interactionsApi = {
  summary(postId) {
    return request(`/v1/posts/${postId}/interactions`);
  },
  toggleLike(postId) {
    return request(`/v1/posts/${postId}/likes`, {method: 'POST'});
  },
  comments(postId) {
    return request(`/v1/posts/${postId}/comments`);
  },
  addComment(postId, content) {
    return request(`/v1/posts/${postId}/comments`, {method: 'POST', body: JSON.stringify({content})});
  },
  deleteComment(postId, commentId) {
    return request(`/v1/posts/${postId}/comments/${commentId}`, {method: 'DELETE'});
  }
};

export {API_BASE_URL};
