"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const COLORS = ["oklch(0.60 0.28 25 / 0.7)",  "oklch(0.75 0.28 25 / 0.7)", "oklch(0.90 0.28 25 / 0.7)"]

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
  const totalRacistas = dadosRacistas.reduce((sum, item) => sum + item.value, 0)
  const totalNaoRacistas = dadosNaoRacistas.reduce((sum, item) => sum + item.value, 0)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Casos Racistas por Rede Social</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] relative">
          <div className="absolute bottom-3 inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <span className="text-4xl font-bold">{totalRacistas}</span>
            <span className="text-md text-muted-foreground">Racistas</span>
          </div>
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
              <Legend 
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                paddingTop: "5px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value, entry) => {
                return <span className="text-accent-foreground text-lg align-middle">{value}</span>
              }}
              iconType="circle"
              iconSize={10}
              
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Casos Não Racistas por Rede Social</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] relative">
          <div className="absolute bottom-3 inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <span className="text-4xl font-bold">{totalNaoRacistas}</span>
            <span className="text-md text-muted-foreground">Não racistas</span>
          </div>
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
              <Legend 
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                paddingTop: "5px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value, entry) => {
                return <span className="text-accent-foreground text-lg text-center align-middle">{value}</span>
              }}
              iconType="circle"
              iconSize={10}
              />
              
            </PieChart>
            
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
