
import React from 'react';
import { UserType } from '../types';
import { ICONS } from '../constants';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    userType: UserType;
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
    const adminMenuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard, path: '/dashboard' },
        { id: 'schedule', label: 'Schedule', icon: ICONS.Calendar, path: '/schedule' },
        { id: 'user-management', label: 'User Management', icon: ICONS.Users, path: '/user-management' },
        { id: 'subject-management', label: 'Subject Management', icon: ICONS.BookOpen, path: '/subject-management' },
        { id: 'reports', label: 'Reports', icon: ICONS.CheckCircle, path: '/reports' },
    ];

    const facultyMenuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard, path: '/dashboard' },
        { id: 'attendance', label: 'Take Attendance', icon: ICONS.CheckCircle, path: '/take-attendance' },
        { id: 'my-attendance', label: 'My Presence', icon: ICONS.User, path: '/my-attendance' },
        { id: 'schedule', label: 'My Schedule', icon: ICONS.Calendar, path: '/schedule' },
    ];

    const studentMenuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard, path: '/dashboard' },
        { id: 'schedule', label: 'Schedule', icon: ICONS.Calendar, path: '/schedule' },
    ];

    const menuItems = userType === UserType.ADMIN ? adminMenuItems :
        userType === UserType.FACULTY ? facultyMenuItems :
            studentMenuItems;

    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
            <div className="p-6 border-b border-slate-100 flex items-center gap-3 text-indigo-600">
                <div className="p-2 bg-indigo-50 rounded-lg">
                    {ICONS.GraduationCap}
                </div>
                <span className="font-black text-xl tracking-tight text-slate-900">EduTrack</span>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-4">Main Menu</div>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${isActive
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                            : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-6 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Support Portal</p>
                    <button className="w-full py-2 text-xs font-bold text-indigo-600 hover:underline">Help & Docs</button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
