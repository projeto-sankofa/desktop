"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", racistas: 400, naoRacistas: 300 },
  { name: "Fev", racistas: 300, naoRacistas: 400 },
  { name: "Mar", racistas: 600, naoRacistas: 500 },
  { name: "Abr", racistas: 800, naoRacistas: 650 },
  { name: "Mai", racistas: 500, naoRacistas: 700 },
  { name: "Jun", racistas: 900, naoRacistas: 800 },
  { name: "Jul", racistas: 750, naoRacistas: 850 },
]

export function LineChartComponent() {
  const corRacistas = "var(--primary)";
  const corNaoRacistas = "var(--accent-foreground)";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão Geral</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="name" className="text-xs fill-muted-foreground" />
            <YAxis className="text-xs fill-muted-foreground" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            />
            <Line
              type="monotone"
              dataKey="racistas"
              stroke={corRacistas}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Racistas"
              
            />

            <Line
              type="monotone"
              dataKey="naoRacistas"
              stroke={corNaoRacistas}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Não Racistas"
              
            />

            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                paddingTop: "10px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value, entry) => {
                const { color }= entry
                return <span className={value == 'Racistas' ? 'text-primary' : "text-accent-foreground"}>{value}</span>
              }}
              iconType="circle"
              iconSize={10}
              
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
