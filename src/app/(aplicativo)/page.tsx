import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChartComponent } from "./components/grafico-area"
import { PieChartComponent } from "./components/pie-charts"
import axios from "axios"


// Define a estrutura que o componente LineChartComponent espera
interface DadoGrafico {
    name: string; // Mês abreviado (ex: "Jan")
    racistas: number;
    naoRacistas: number;
}
interface DadoOriginal {
    id: string;
    text: string;
    classification: 'Racista' | 'Não racista'; // Adicionei os tipos literais que espero
    confidence: number;
    source: string;
    collectedAt: string; // ISO 8601 string
}

export default async function Dashboard() {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5100/ai-results?limit=10000');
      return response.data;
    }
    catch (error) {
      console.error("Erro ao buscar dados:", error);
      return null;
    }

  }
  const data = await fetchData();
  console.log(data)
  const accMedia = data ? (data.reduce((acc: number, item: any) => acc + item.confidence, 0) / data.length) * 100 : 0;
  const racistCases = data ? data.filter((item: any) => item.classification === "Racista").length : 0;
  const nracistCases = data ? data.filter((item: any) => item.classification === "Não racista").length : 0;

  const mesesAbreviados: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  function processarDadosParaGrafico(dados: DadoOriginal[]): DadoGrafico[] {
    // Objeto temporário para agrupar as contagens por índice do mês (0-11)
    const agrupamentoMensal: Record<number, { racistas: number; naoRacistas: number }> = {};

    // 1. Agrupar e contar
    dados.forEach(dado => {
        // Extrai a data e o mês
        const data = new Date(dado.collectedAt);
        const mesIndex = data.getMonth(); // 0 para Janeiro, 9 para Outubro, etc.

        // Inicializa o contador para o mês se ele ainda não existir
        if (!agrupamentoMensal[mesIndex]) {
            agrupamentoMensal[mesIndex] = { racistas: 0, naoRacistas: 0 };
        }

        // Incrementa a contagem correta
        if (dado.classification === 'Racista') {
            agrupamentoMensal[mesIndex].racistas += 1;
        } else if (dado.classification === 'Não racista') {
            agrupamentoMensal[mesIndex].naoRacistas += 1;
        }
    });

    // 2. Converter o objeto agrupado para o formato do array de gráfico
    const arrayParaGrafico: DadoGrafico[] = Object.keys(agrupamentoMensal)
        .map(mesIndexStr => {
            const mesIndex = parseInt(mesIndexStr, 10);
            const dadosDoMes = agrupamentoMensal[mesIndex];
            
            return {
                name: mesesAbreviados[mesIndex], // Usa o mapeamento para o nome abreviado
                racistas: dadosDoMes.racistas,
                naoRacistas: dadosDoMes.naoRacistas,
            };
        })
        // Opcional: Ordenar pelo mês para garantir que o gráfico esteja correto
        .sort((a, b) => mesesAbreviados.indexOf(a.name) - mesesAbreviados.indexOf(b.name));
    
    return arrayParaGrafico;
  }

  const dadosGrafico = data ? processarDadosParaGrafico(data) : [];
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-medium">Total de Analíses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.length}</div>
              <p className="text-sm text-muted-foreground">+14% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-medium">Casos de Racismo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{racistCases}</div>
              <p className="text-sm text-muted-foreground">+5.2% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-medium">Precisão I.A</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accMedia.toFixed(1)}%</div>
              <p className="text-sm text-muted-foreground">Testado e comprovado</p>
            </CardContent>
          </Card>
        </div>
        <LineChartComponent  data={dadosGrafico}/>
        <PieChartComponent racist={racistCases} nracist={nracistCases} />
        {/*<div className="grid gap-4 md:grid-cols-3">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl">Relatórios Gerados</CardTitle>
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
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Histórico de Análises</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] flex items-center justify-center border-t pt-4">
              <div className="w-full h-full flex flex-col gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-between items-center p-2 border rounded-md">
                    <div >
                      Análise #{item}
                    </div>
                    <div className="text-muted-foreground text-sm flex gap-4">
                      <p>Feito por: Pedro Henrique</p>
                      |
                      <p>10/05/2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>*/}
      </main>
    </div>
  )
}
