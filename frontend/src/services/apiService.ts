
const API_BASE = '/api/index.php';

export const apiService = {
  async login(credentials: any) {
    try {
      const res = await fetch(`${API_BASE}?action=login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!res.ok) throw new Error("Server error");
      return await res.json();
    } catch (e) {
      throw e;
    }
  },

  async getAllData(userId?: number, userType?: string) {
    try {
      let url = `${API_BASE}?action=get_all`;
      if (userId && userType) {
        url += `&user_id=${userId}&user_type=${userType}`;
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Sync failed");
      return await res.json();
    } catch (e) {
      throw e;
    }
  },

  async markAttendance(data: any) {
    try {
      const res = await fetch(`${API_BASE}?action=attendance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (e) {
      return { success: false };
    }
  },

  async manageUser(op: string, data: any) {
    try {
      const res = await fetch(`${API_BASE}?action=manage_user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ op, ...data }),
      });
      return await res.json();
    } catch (e) {
      return { success: false };
    }
  },

  async manageSubject(op: string, data: any) {
    try {
      const res = await fetch(`${API_BASE}?action=manage_subject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ op, ...data }),
      });
      return await res.json();
    } catch (e) {
      return { success: false };
    }
  }
};
