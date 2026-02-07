const API_BASE = '/api';

let cachedApiKey: string | null = null;
let configLoader: Promise<string> | null = null;

const getApiKey = async () => {
    if (cachedApiKey) return cachedApiKey;
    if (configLoader) return configLoader;

    configLoader = fetch('/config.json')
        .then(res => res.json())
        .then(data => {
            cachedApiKey = data.API_KEY || '';
            return cachedApiKey as string;
        })
        .catch(() => {
            cachedApiKey = '';
            return '';
        });
    return configLoader;
};

const getHeaders = async () => ({
    'Content-Type': 'application/json',
    'X-API-Key': await getApiKey()
});

export const apiService = {
    async login(credentials: any) {
        try {
            const res = await fetch(`${API_BASE}?action=login`, {
                method: 'POST',
                headers: await getHeaders(),
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
            const res = await fetch(url, {
                headers: await getHeaders()
            });
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
                headers: await getHeaders(),
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
                headers: await getHeaders(),
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
                headers: await getHeaders(),
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async manageAnnouncement(op: string, data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=manage_announcement`, {
                method: 'POST',
                headers: await getHeaders(),
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async manageNote(op: string, data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=manage_note`, {
                method: 'POST',
                headers: await getHeaders(),
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async manageLeave(op: string, data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=manage_leave`, {
                method: 'POST',
                headers: await getHeaders(),
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async manageFacultyAttendance(op: string, data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=manage_faculty_attendance`, {
                method: 'POST',
                headers: await getHeaders(),
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async getStudentSchedule(studId: number) {
        const res = await fetch(`/api/schedule/student/${studId}`, {
            headers: await getHeaders()
        });
        if (!res.ok) throw new Error("Failed to fetch student schedule");
        return await res.json();
    },

    async getFacultySchedule(facultyId: number) {
        const res = await fetch(`/api/schedule/faculty/${facultyId}`, {
            headers: await getHeaders()
        });
        if (!res.ok) throw new Error("Failed to fetch faculty schedule");
        return await res.json();
    },

    async updateSchedule(data: any) {
        const res = await fetch('/api/schedule/update', {
            method: 'POST',
            headers: await getHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || "Failed to update schedule");
        }
        return await res.json();
    }
};
