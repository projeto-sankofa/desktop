import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { Analysis } from '@/components/shared/DataTableAnalises';
type GraficoAreaProps = {
    data: Analysis
}
export default function GraficoBarrasRedes({data} : GraficoAreaProps){

    const plataformas = ['instagram', 'x', 'bluesky'];

    const dados = plataformas.map((plataforma) => {
    const comentariosDaPlataforma = data.comentarios.filter(
        (c) => c.platform === plataforma
    );

    return {
        plataforma,
        racistas: comentariosDaPlataforma.filter((c) => c.classification === 'racista').length,
        naoRacistas: comentariosDaPlataforma.filter((c) => c.classification === 'não racista').length,
    };
    });

    const corRacistas = "oklch(0.60 0.28 25 / 0.7)";
    const corNaoRacistas = "oklch(0.78 0.25 27 / 0.7)";

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={dados}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                barCategoryGap="20%"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="plataforma" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                dataKey="racistas"
                fill={corRacistas}
                name="Racistas"
                radius={[4, 4, 0, 0]}
                />
                <Bar
                dataKey="naoRacistas"
                fill={corNaoRacistas}
                name="Não Racistas"
                radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}