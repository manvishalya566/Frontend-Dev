const BASE = 'http://localhost:3001/students';

async function handleResponse(res) {
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || res.statusText);
  }
  return res.json();
}

export default {
  getAll: async () => {
    const res = await fetch(BASE);
    return handleResponse(res);
  },
  getById: async (id) => {
    const res = await fetch(`${BASE}/${id}`);
    return handleResponse(res);
  },
  createStudent: async (student) => {
    const res = await fetch(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    return handleResponse(res);
  },
  updateStudent: async (id, student) => {
    const res = await fetch(`${BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    return handleResponse(res);
  },
  deleteStudent: async (id) => {
    const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Delete failed: ' + res.statusText);
    return {};
  }
};
