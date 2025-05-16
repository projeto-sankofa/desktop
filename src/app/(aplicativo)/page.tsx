import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChartComponent } from "./components/grafico-linha"
import { PieChartComponent } from "./components/pie-charts"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">Total de Analíses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+14% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">Casos de Racismo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+5.2% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">Precisão I.A</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Testado e comprovado</p>
            </CardContent>
          </Card>
        </div>
        <LineChartComponent />
        <PieChartComponent />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Relatórios Gerados</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] flex items-center justify-center border-t pt-4">
              <div className="w-full h-full flex flex-col gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-between items-center p-2 border rounded-md">
                    <div>Relatório #{item}</div>
                    <div className="text-muted-foreground text-sm">12/05/2023</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Histórico de Análises</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] flex items-center justify-center border-t pt-4">
              <div className="w-full h-full flex flex-col gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-between items-center p-2 border rounded-md">
                    <div>Análise #{item}</div>
                    <div className="text-muted-foreground text-sm">10/05/2023</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
