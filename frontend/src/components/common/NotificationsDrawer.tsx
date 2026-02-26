import React from 'react';
import { Bell, Check, X } from 'lucide-react';

interface Notification {
    notification_id: number;
    title: string;
    message: string;
    type: string;
    is_read: boolean;
    created_at: string;
}

interface NotificationsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    notifications: Notification[];
    onMarkRead: (id: number) => void;
    onClearAll: () => void;
}

const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
    isOpen,
    onClose,
    notifications,
    onMarkRead,
    onClearAll
}) => {
    const unreadCount = notifications.filter(n => !n.is_read).length;

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] animate-in fade-in duration-300"
                    onClick={onClose}
                />
            )}

            {/* Side Drawer */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
                    <div>
                        <h4 className="font-bold text-slate-800">Notifications</h4>
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{unreadCount} New Messages</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white rounded-xl text-slate-400 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <div
                                key={notification.notification_id}
                                className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors ${!notification.is_read ? 'bg-indigo-50/30' : ''}`}
                            >
                                <div className="flex justify-between items-start gap-3">
                                    <div className="flex-1">
                                        <h5 className={`text-sm font-bold ${!notification.is_read ? 'text-indigo-900' : 'text-slate-700'}`}>
                                            {notification.title}
                                        </h5>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                            {notification.message}
                                        </p>
                                        <span className="text-[10px] font-bold text-slate-400 mt-2 block uppercase tracking-wider">
                                            {new Date(notification.created_at).toLocaleDateString()} • {new Date(notification.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    {!notification.is_read && (
                                        <button
                                            onClick={() => onMarkRead(notification.notification_id)}
                                            className="text-indigo-400 hover:text-indigo-600 p-1 hover:bg-indigo-100 rounded-full transition-colors"
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center text-slate-400">
                            <Bell className="w-12 h-12 mx-auto mb-4 opacity-10" />
                            <p className="text-sm font-bold">All caught up!</p>
                        </div>
                    )}
                </div>

                {notifications.length > 0 && (
                    <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                        <button
                            onClick={onClearAll}
                            className="w-full py-3 flex items-center justify-center gap-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors font-bold text-xs uppercase tracking-widest"
                        >
                            <X className="w-4 h-4" />
                            Clear All Notifications
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default NotificationsDrawer;
