
import React from 'react';
import { AdminTab, UserType } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  userType: UserType;
  activeTab: string;
  onTabChange: (tab: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userType, activeTab, onTabChange }) => {
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard },
    { id: 'schedule', label: 'Schedule', icon: ICONS.Calendar },
    { id: 'user-management', label: 'User Management', icon: ICONS.Users },
    { id: 'subject-management', label: 'Subject Management', icon: ICONS.BookOpen },
    { id: 'reports', label: 'Reports', icon: ICONS.CheckCircle },
  ];

  const facultyMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard },
    { id: 'schedule', label: 'My Schedule', icon: ICONS.Calendar },
  ];

  const studentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.Dashboard },
    { id: 'schedule', label: 'Schedule', icon: ICONS.Calendar },
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
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
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
