"use client"
import { DataTable } from '@/components/shared/DataTableAnalises';
import { mockAnalyses } from '@/data/mockAnalysis';

export default function HistoricoAnalises(){
    return (
        <div className="flex min-h-screen w-full bg-background">
            <main className="flex-1 overflow-y-auto p-6 gap-8">
                <h1 className="text-3xl mb-2 p-6 font-semibold">
                    Histórico de Análises
                </h1>
                <div className="flex justify-center w-full p-6 gap-8">
                    <DataTable data={mockAnalyses} title='Análises' currentUserId='user1' />
                </div>
            </main>
        </div>
    );
}