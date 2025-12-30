
import React, { useState } from 'react';
import { User, UserType } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  user: User;
  pageTitle: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, pageTitle, onLogout }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8 flex-1">
        <h2 className="text-xl font-black text-slate-800 capitalize min-w-[150px]">{pageTitle.replace('-', ' ')}</h2>
        
        <div className="relative max-w-md w-full hidden md:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
            {ICONS.Search}
          </div>
          <input 
            type="text" 
            placeholder="Search records, students, subjects..."
            className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg relative transition-colors">
          {ICONS.Bell}
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        <div className="relative">
          <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-3 p-1 pl-3 pr-1 rounded-full border border-slate-100 hover:bg-slate-50 transition-all active:scale-95"
          >
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-slate-900 truncate max-w-[120px]">{user.email.split('@')[0]}</div>
              <div className="text-[9px] font-black text-indigo-500 uppercase tracking-tighter">{user.user_type}</div>
            </div>
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {user.email.charAt(0).toUpperCase()}
            </div>
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-150">
              <div className="p-6 text-center border-b border-slate-50">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <h4 className="font-bold text-slate-900 truncate">{user.email}</h4>
                <p className="text-xs text-slate-400 uppercase font-black tracking-widest mt-1">{user.user_type} Account</p>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  {ICONS.User} My Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  {ICONS.Settings} Account Settings
                </button>
                <div className="my-2 border-t border-slate-50"></div>
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                >
                  {ICONS.LogOut} Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
