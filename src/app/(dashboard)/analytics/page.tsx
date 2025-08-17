"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { AcquisitionBarChart } from "@/components/dashboard/BarChart";
import { useEffect, useState } from "react";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AnalyticsPage() {
  // Real-time data state
  const [lineChartData, setLineChartData] = useState([
    { month: 'January', desktop: 4000, mobile: 2400 },
    { month: 'February', desktop: 3000, mobile: 1398 },
    { month: 'March', desktop: 2000, mobile: 9800 },
    { month: 'April', desktop: 2780, mobile: 3908 },
    { month: 'May', desktop: 1890, mobile: 4800 },
    { month: 'June', desktop: 2390, mobile: 3800 },
    { month: 'July', desktop: 3490, mobile: 4300 },
  ]);
  const [pieChartData, setPieChartData] = useState([
    { name: 'Organic Search', value: 400 },
    { name: 'Social Media', value: 300 },
    { name: 'Direct', value: 300 },
    { name: 'Referral', value: 200 },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLineChartData((prev) => prev.map((d) => ({
        ...d,
        desktop: Math.max(0, d.desktop + Math.floor(Math.random() * 200 - 100)),
        mobile: Math.max(0, d.mobile + Math.floor(Math.random() * 200 - 100)),
      })));
      setPieChartData((prev) => prev.map((d) => ({
        ...d,
        value: Math.max(0, d.value + Math.floor(Math.random() * 40 - 20)),
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>User Acquisition</CardTitle>
          <CardDescription>Comparison of desktop vs. mobile users over time.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Export and filter controls will go here */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="desktop" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="mobile" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Acquisition by Source</CardTitle>
          <CardDescription>Bar chart of user acquisition by source.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Export and filter controls will go here */}
          <AcquisitionBarChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Breakdown of where your traffic is coming from.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Export and filter controls will go here */}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
