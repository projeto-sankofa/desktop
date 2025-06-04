'use client'
import { Button } from "@/components/ui/button";
import { AnalysesDataTable } from "./data-table";
import { columns } from "./columns";
import { Analysis } from "@/types/analysis";
import { useAnalysesDatatable } from "@/hooks/use-analyses-datatable";
import { toast } from "sonner";

const analyses: Analysis[] = [
    {
        id: 'analysis-001',
        name: 'Sentiment Analysis Q1',
        userId: 'user-123',
        classifierId: 'classifier-abc',
        visibility: 'public',
        startAt: new Date('2024-01-01T00:00:00Z'),
        endAt: new Date('2024-03-31T23:59:59Z'),
        messagesQuantity: 1500,
        averageAccuracy: 0.85
    },
    {
        id: 'analysis-002',
        name: 'Topic Modeling - Internal Docs',
        userId: 'user-456',
        classifierId: 'classifier-def',
        visibility: 'private',
        startAt: new Date('2024-02-15T09:00:00Z'),
        endAt: new Date('2024-05-15T17:00:00Z'),
        messagesQuantity: 3200,
        averageAccuracy: 0.92
    },
    {
        id: 'analysis-003',
        name: 'Customer Feedback Analysis May',
        userId: 'user-789',
        classifierId: 'classifier-ghi',
        visibility: 'public',
        startAt: new Date('2024-05-01T00:00:00Z'),
        endAt: new Date('2024-05-31T23:59:59Z'),
        messagesQuantity: 850,
        averageAccuracy: 0.78
    },
    {
        id: 'analysis-004',
        name: 'Spam Detection Performance',
        userId: 'user-123', // Same user as analysis-001
        classifierId: 'classifier-jkl',
        visibility: 'private',
        startAt: new Date('2023-11-01T00:00:00Z'),
        endAt: new Date('2024-04-30T23:59:59Z'),
        messagesQuantity: 10000,
        averageAccuracy: 0.95
    }
];

export default function GerarRelatorio() {
    const { analyses: selectedAnalyses } = useAnalysesDatatable()

    const handleGenerateReport = async() => {
        // POST para API com os ID'S das analises que devem estar no relátorio

        console.log(selectedAnalyses)
        toast.info(JSON.stringify(selectedAnalyses))
    }

    return (
        <div className="min-h-screen w-full p-8 space-y-8">
            <h2 className="inline-block text-3xl font-medium">Gerar Relátorio</h2>

            <AnalysesDataTable columns={columns} data={analyses}/>

            <Button onClick={handleGenerateReport}>Gerar Relátorio</Button>
        </div>
    )
}