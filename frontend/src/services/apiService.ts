
const API_BASE = '/api';

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

    async getFacultyStatus(facultyId?: number) {
        const url = facultyId ? `${API_BASE}/?action=get_faculty_status&faculty_id=${facultyId}` : `${API_BASE}/?action=get_faculty_status`;
        const response = await fetch(url);
        return response.json();
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
    },

    async manageAnnouncement(op: string, data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=manage_announcement`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
                headers: { 'Content-Type': 'application/json' },
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
                headers: { 'Content-Type': 'application/json' },
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ op, ...data }),
            });
            return await res.json();
        } catch (e) {
            return { success: false };
        }
    },

    async getStudentSchedule(studId: number) {
        const res = await fetch(`/api/schedule/student/${studId}`);
        if (!res.ok) throw new Error("Failed to fetch student schedule");
        return await res.json();
    },

    async getFacultySchedule(facultyId: number) {
        const res = await fetch(`/api/schedule/faculty/${facultyId}`);
        if (!res.ok) throw new Error("Failed to fetch faculty schedule");
        return await res.json();
    },

    async updateSchedule(data: any) {
        const res = await fetch('/api/schedule/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || "Failed to update schedule");
        }
        return await res.json();
    },

    async uploadSchedule(data: any) {
        try {
            const res = await fetch(`${API_BASE}?action=upload_schedule`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: "Upload failed" };
        }
    },

    async getUploadedSchedules(params: any = {}) {
        try {
            const queryParams = new URLSearchParams();
            Object.keys(params).forEach(key => {
                if (params[key]) queryParams.append(key, params[key]);
            });
            const res = await fetch(`${API_BASE}?action=get_uploaded_schedules&${queryParams.toString()}`);
            if (!res.ok) throw new Error("Fetch failed");
            return await res.json();
        } catch (e) {
            throw e;
        }
    },

    async getNotifications(userId: number) {
        try {
            const res = await fetch(`${API_BASE}?action=get_notifications&user_id=${userId}`);
            if (!res.ok) throw new Error("Failed to fetch notifications");
            return await res.json();
        } catch (e) {
            return [];
        }
    },

    async markNotificationRead(notificationId: number) {
        try {
            await fetch(`${API_BASE}?action=mark_notification_read`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notification_id: notificationId }),
            });
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    },

    async clearNotifications(userId: number) {
        try {
            await fetch(`${API_BASE}?action=clear_notifications`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId }),
            });
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    }
};
