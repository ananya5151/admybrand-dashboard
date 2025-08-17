"use client";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from "recharts";

const data = [
    { metric: "Revenue", value: 120 },
    { metric: "Users", value: 98 },
    { metric: "Conversions", value: 86 },
    { metric: "Growth", value: 99 },
    { metric: "Retention", value: 85 },
    { metric: "Engagement", value: 65 },
];

export function AnalyticsRadarChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Score" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}
