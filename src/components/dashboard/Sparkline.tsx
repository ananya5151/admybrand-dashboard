import { LineChart, Line, ResponsiveContainer } from "recharts";

export function Sparkline({ data, color = "#4f46e5" }: { data: number[]; color?: string }) {
    const chartData = data.map((v, i) => ({ x: i, y: v }));
    return (
        <ResponsiveContainer width="100%" height={32}>
            <LineChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="y" stroke={color} strokeWidth={2} dot={false} isAnimationActive={true} />
            </LineChart>
        </ResponsiveContainer>
    );
}
