"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { User, Lock, Sliders, Bell, Mail, UserCircle } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-br from-indigo-50/60 via-white/80 to-purple-50/60 dark:from-zinc-900/80 dark:to-indigo-950/80 py-10 px-0 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3"><Sliders className="h-8 w-8 text-indigo-500" /> Settings</h1>
        {/* Profile Section */}
        <Card className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-xl border-0">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <UserCircle className="h-7 w-7 text-indigo-500" />
            <div>
              <CardTitle className="text-lg">Profile</CardTitle>
              <CardDescription>Manage your personal information.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                className="w-full border rounded-lg px-3 py-2 bg-white/60 dark:bg-zinc-800/60 focus:ring-2 focus:ring-indigo-400 transition"
                defaultValue="Jane Doe"
                placeholder="Enter your name"
                title="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                className="w-full border rounded-lg px-3 py-2 bg-white/60 dark:bg-zinc-800/60 focus:ring-2 focus:ring-indigo-400 transition"
                defaultValue="jane@email.com"
                placeholder="Enter your email"
                title="Email"
              />
            </div>
          </CardContent>
        </Card>
        {/* Password Section */}
        <Card className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-xl border-0">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Lock className="h-7 w-7 text-indigo-500" />
            <div>
              <CardTitle className="text-lg">Password</CardTitle>
              <CardDescription>Change your account password.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div>
              <label className="block text-sm font-medium mb-1">Current Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2 bg-white/60 dark:bg-zinc-800/60 focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Enter current password"
                title="Current Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2 bg-white/60 dark:bg-zinc-800/60 focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Enter new password"
                title="New Password"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-lg shadow">Update Password</button>
          </CardContent>
        </Card>
        {/* Preferences Section */}
        <Card className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-xl border-0">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Sliders className="h-7 w-7 text-indigo-500" />
            <div>
              <CardTitle className="text-lg">Preferences</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2"><Mail className="h-5 w-5 text-indigo-400" /> Dark Mode</span>
              <ThemeToggle />
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2"><Bell className="h-5 w-5 text-indigo-400" /> Notifications</span>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>
        {/* Integrations Section */}
        <Card className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-xl border-0">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Mail className="h-7 w-7 text-indigo-500" />
            <div>
              <CardTitle className="text-lg">Integrations</CardTitle>
              <CardDescription>Connect with other services.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <button className="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg shadow">Google</button>
              <button className="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg shadow">Slack</button>
              <button className="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg shadow">Zapier</button>
            </div>
          </CardContent>
        </Card>
        {/* Account Actions Section */}
        <Card className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-xl border-0">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <User className="h-7 w-7 text-indigo-500" />
            <div>
              <CardTitle className="text-lg">Account Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <button className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-lg w-full shadow">Delete Account</button>
            <button className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg w-full shadow">Export My Data</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
