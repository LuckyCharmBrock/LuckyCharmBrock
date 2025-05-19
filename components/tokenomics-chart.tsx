"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function TokenomicsChart() {
  const data = [
    { name: "Lottery Wallet", value: 3, color: "#10B981" },
    { name: "Marketing", value: 2, color: "#FBBF24" },
    { name: "Reflections", value: 2, color: "#60A5FA" },
    { name: "Liquidity", value: 1, color: "#F472B6" },
    { name: "Burn", value: 1, color: "#EF4444" },
  ]

  return (
    <div className="bg-black/60 p-6 rounded-lg border border-green-500/30 h-auto min-h-[300px] md:h-80">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={({ viewBox }) => Math.min(viewBox.width, viewBox.height) / 3}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
