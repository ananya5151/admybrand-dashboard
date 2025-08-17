"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { source: "Organic", users: 4000 },
    { source: "Social", users: 3000 },
    { source: "Referral", users: 2000 },
    { source: "Email", users: 2780 },
    { source: "Paid", users: 1890 },
];

export function AcquisitionBarChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#6366f1" />
            </BarChart>
        </ResponsiveContainer>
    );
}
