"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { month: "Jan", forecast: 4000, actual: 4200 },
    { month: "Feb", forecast: 4300, actual: 4100 },
    { month: "Mar", forecast: 4600, actual: 4700 },
    { month: "Apr", forecast: 4800, actual: 4900 },
    { month: "May", forecast: 5000, actual: 5100 },
    { month: "Jun", forecast: 5200, actual: 5300 },
    { month: "Jul", forecast: 5400, actual: 5500 },
];

export function ForecastAreaChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a21caf" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#a21caf" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="forecast" stroke="#6366f1" fillOpacity={1} fill="url(#colorForecast)" />
                <Area type="monotone" dataKey="actual" stroke="#a21caf" fillOpacity={1} fill="url(#colorActual)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
