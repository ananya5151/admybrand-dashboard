"use client";
// Removed unused Card imports
import { useState } from "react";
import { Info, AlertTriangle, CheckCircle, Trash2, Filter } from "lucide-react";

const mockNotifications = [
    { id: 1, type: "info", message: "Your export is ready.", date: "2025-08-17", read: false },
    { id: 2, type: "alert", message: "Unusual login detected.", date: "2025-08-16", read: false },
    { id: 3, type: "success", message: "Payment received.", date: "2025-08-10", read: true },
    { id: 4, type: "info", message: "New user registered.", date: "2025-08-09", read: true },
];

export default function NotificationsPage() {
    const [filter, setFilter] = useState("week");
    const [notifications, setNotifications] = useState(mockNotifications);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Filtering logic
    const now = new Date("2025-08-17");
    let filtered = notifications;
    if (filter === "week") {
        filtered = notifications.filter(n => (now.getTime() - new Date(n.date).getTime()) / (1000 * 60 * 60 * 24) <= 7);
    } else if (filter === "month") {
        filtered = notifications.filter(n => (now.getTime() - new Date(n.date).getTime()) / (1000 * 60 * 60 * 24) <= 31);
    }

    function markAsRead(id: number) {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    }
    function markAsUnread(id: number) {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: false } : n));
    }
    function clearAll() {
        setNotifications([]);
        setTimeout(() => setNotifications([{
            id: 100,
            type: "info",
            message: "Welcome! You have no new notifications.",
            date: "2025-08-17",
            read: true
        }]), 1500);
    }

    return (
        <div className="w-full min-h-[90vh] bg-gradient-to-br from-indigo-50/60 via-white/80 to-purple-50/60 dark:from-zinc-900/80 dark:to-indigo-950/80 py-10 px-0 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
                        <div className="relative">
                            <button title="Filter notifications" className="p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors border" onClick={() => setDropdownOpen(v => !v)}>
                                <Filter className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-zinc-900 border rounded shadow-lg z-10">
                                    <button className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 ${filter === "week" ? "font-bold text-indigo-600" : ""}`} onClick={() => { setFilter("week"); setDropdownOpen(false); }}>Past Week</button>
                                    <button className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 ${filter === "month" ? "font-bold text-indigo-600" : ""}`} onClick={() => { setFilter("month"); setDropdownOpen(false); }}>Past Month</button>
                                    <button className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 ${filter === "all" ? "font-bold text-indigo-600" : ""}`} onClick={() => { setFilter("all"); setDropdownOpen(false); }}>All</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <button className="px-4 py-2 rounded bg-red-100 text-red-700 flex items-center gap-1 shadow hover:bg-red-200" onClick={clearAll}><Trash2 className="h-5 w-5" />Clear All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.length === 0 && (
                        <div className="col-span-full text-center text-muted-foreground py-12 text-lg">No notifications found.</div>
                    )}
                    {filtered.map(n => (
                        <div key={n.id} className={`flex items-start gap-4 p-5 rounded-xl shadow-lg border-l-4 transition-all duration-200 ${n.type === "alert" ? "border-red-500 bg-red-50 dark:bg-red-900/30" : n.type === "success" ? "border-green-500 bg-green-50 dark:bg-green-900/30" : "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"} ${n.read ? 'opacity-60' : ''}`}>
                            <div>
                                {n.type === "alert" && <AlertTriangle className="h-7 w-7 text-red-500" />}
                                {n.type === "success" && <CheckCircle className="h-7 w-7 text-green-500" />}
                                {n.type === "info" && <Info className="h-7 w-7 text-indigo-500" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-base">{n.message}</span>
                                    <span className="text-xs text-muted-foreground">{n.date}</span>
                                </div>
                                <div className="flex gap-2 mt-1">
                                    {n.read ? (
                                        <button className="text-xs text-indigo-500 underline" onClick={() => markAsUnread(n.id)}>Mark as Unread</button>
                                    ) : (
                                        <button className="text-xs text-indigo-500 underline" onClick={() => markAsRead(n.id)}>Mark as Read</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
