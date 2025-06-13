"use client"
import { useState } from "react"
import EditableTitle from "./components/editableTitle"
import { Analysis } from '@/components/shared/DataTableAnalises';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, X } from "lucide-react";
import DataTableComentarios from "@/components/shared/DataTableComentarios";
import GraficoBarraRedes from "./components/GraficoBarra";



type Props = {
  analise?: Analysis
  userId: string
}

export default function DetalhesAnaliseClient({ analise, userId }: Props) {
  const [analysisTitle, setAnalysisTitle] = useState(analise?.title ?? 'Nome da análise')
  const [isOwner, setIsOwner] = useState(analise?.ownerId === userId)
  const handleEdit = () => {
    console.log('Editando análise...');
  };

  const handleDelete = () => {
    console.log('Excluindo análise...');
  };

  const handleTitleChange = (newTitle: string) => {
    setAnalysisTitle(newTitle)
    console.log('Título alterado para:', newTitle)
  }

  let NetworkLenght = 0
  if(analise?.networks.bs === true)  NetworkLenght++
  if(analise?.networks.ig === true) NetworkLenght++
  if(analise?.networks.x === true) NetworkLenght++


  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className="flex-1 overflow-y-auto p-6 gap-8">
        <h1 className="text-3xl mb-2 p-6 font-semibold">Detalhes da Análise</h1>
        <div className="p-6 flex">
         {/*parte superior */}
          <div className="flex flex-col w-1/3">
            <EditableTitle
            editable={isOwner}
            title={analysisTitle}
            onTitleChange={handleTitleChange}
            />
            <div className=" flex w-full justify-between">
                <p>Autor: {analise?.userName}</p>
                <p>Data: {analise?.analysisDate}</p>
            </div>
          </div>
          {/*botoões de ação */}
          <div className="flex gap-2 ml-4 w-full justify-end">
            {isOwner && (
                <div className="flex gap-2">
                    <Button 
                    variant="secondary" 
                    size="lg"
                    className=""
                    onClick={handleEdit}
                    >
                        Editar
                    </Button>
                    <Button 
                        variant="default" 
                        size="lg"
                        className=""
                        onClick={handleDelete}
                      >
                        Excluir
                    </Button>
                </div>
            )}
          </div>
        </div>
        <main className="p-6 w-full space-y-6">
            {/* stats */}
            <div className="grid grid-cols-4 gap-15">
                <Card className="col-span-2 flex flex-col justify-center items-center h-[350px]">
                    <GraficoBarraRedes data={analise!} />
                </Card>
               
                <div className="col-span-2 gap-6 grid grid-cols-3 justify-center items-center">
                  <Card className="flex flex-col items-center justify-center h-full">
                    <p className="text-7xl font-bold">
                    {analise?.comentarios.length}
                    </p>
                    <p className="text-muted-foreground text-xl">
                      Comentários analisados
                    </p>
                  </Card>
                  <Card className="flex flex-col items-center justify-center h-full">
                    <p className="text-7xl font-bold">
                      {NetworkLenght}
                    </p>
                    <p className="text-muted-foreground text-xl">
                      Redes analisadas
                    </p>
                  </Card>
                  <Card className="flex flex-col justify-center items-center h-full">
                    <p className="text-7xl font-bold">{analise?.modelAccuracy}</p>
                    <p className="text-muted-foreground text-xl">Acurácia da Análise</p>
                  </Card>
                </div> 
            </div>
            {/*tweak cards */}
            <div className="w-full flex justify-between space-y-6">
                <div className="grid grid-cols-3 gap-2">
                    <Card
                    className={`h-20 w-20 flex items-center justify-center font-bold ${analise?.networks.x ? `bg-primary text-primary-foreground border-2 border-primary` : `bg-card hover:bg-accent`}`}
                    >
                        <X size={20}/>
                    </Card>
                    <Card
                    className={`h-20 w-20 flex items-center justify-center font-bold ${analise?.networks.bs ? `bg-primary text-primary-foreground border-2 border-primary` : `bg-card hover:bg-accent`}`}
                    >
                        BS
                    </Card>
                    <Card
                    className={`h-20 w-20 flex items-center justify-center font-bold ${analise?.networks.ig ? `bg-primary text-primary-foreground border-2 border-primary` : `bg-card hover:bg-accent`}`}
                    >
                        <Instagram size={20}/>
                    </Card>
                    
                </div>
                <div>
                    <Card className="flex items-center justify-center w-20 h-20 border border-primary text-primary font-bold ">
                        V.001    
                    </Card>                   
                </div>
            </div>
            {/*data table */}
            <div className="w-full flex items-center justify-center ">
                <DataTableComentarios   idAnalise={analise?.id!} />
            </div>
        </main>
      </div>
    </div>
  )
}
