"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Basic", value: 2845, color: "#3b82f6" },
  { name: "Pro", value: 3568, color: "#8b5cf6" },
  { name: "Enterprise", value: 1432, color: "#10b981" },
  { name: "Free", value: 892, color: "#f59e0b" },
]

export function PieChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: any) => [value, "Customers"]}
          contentStyle={{ 
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e0e0e0",
            borderRadius: "4px"
          }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}