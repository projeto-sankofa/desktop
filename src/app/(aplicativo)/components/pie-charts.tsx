"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const COLORS = ["var(--chart-1)",  "var(--chart-2)", "var(--chart-5)"]

export function PieChartComponent() {
  const dadosRacistas = [
    { name: "X", value: 400 },
    { name: "Instagram", value: 200 },
    { name: "BlueSky", value: 100 },
  ]

  const dadosNaoRacistas = [
    { name: "X", value: 200 },
    { name: "Instagram", value: 300 },
    { name: "BlueSky", value: 550 },
  ]
  const centerText = "1200"
  const centerSubText = "Casos analisados"
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Casos Racistas por Rede Social</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dadosRacistas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#8884d8"
                paddingAngle={2}
                stroke="transparent"
                
              >
                {dadosRacistas.map((entry, index) => (
                  <Cell key={`cell-racista-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Casos Não Racistas por Rede Social</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            
            <PieChart>
              <Pie
                data={dadosNaoRacistas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                fill="#82ca9d"
                stroke="transparent"
                
              >
                {dadosNaoRacistas.map((entry, index) => (
                  <Cell key={`cell-nao-racista-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                
              </Pie>
              <Tooltip />
              <Legend />
              
            </PieChart>
            
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
