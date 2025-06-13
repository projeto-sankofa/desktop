
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, MoreHorizontal, Instagram, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockAnalyses } from '@/data/mockAnalysis';

type DataTableComentariosProps = {
    idAnalise : string
}

const DataTableComentarios = ({idAnalise} : DataTableComentariosProps) => {
  const mockData = mockAnalyses
  /*Encontrar a análise especifica atraves da props idanalise*/ 
  const analise = mockData.find(analise => analise.id === idAnalise)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(analise?.comentarios.length! / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = analise?.comentarios.slice(startIndex, startIndex + itemsPerPage);
  
  // Simular usuário atual - em uma aplicação real, isso viria de um contexto de autenticação
  const currentUserId = "user123";

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'x':
        return <X className="h-4 w-4" />;
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'bluesky':
        return <span className="text-xs font-bold">BS</span>;
      default:
        return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    const colors = {
      'instagram': 'bg-pink-100 text-pink-800',
      'x': 'bg-gray-100 text-gray-800', 
      'bluesky': 'bg-blue-100 text-blue-800'
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPlatformName = (platform: string) => {
    const names = {
      'x': 'X',
      'instagram': 'Instagram',
      'bluesky': 'Bluesky'
    };
    return names[platform as keyof typeof names] || platform;
  };

  return (
    <div className="w-full space-y-6">
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-accent ">
        <table className="w-full">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                ID Comentário
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Plataforma
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Conteúdo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Publicado em
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Classificação
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Acurácia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {/*mapear os comentarios da analise*/ }
            {paginatedData!.map((comment) => (
              <tr key={comment.id} className="hover:bg-accent">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {comment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${getPlatformColor(comment.platform)}`}>
                      {getPlatformIcon(comment.platform)}
                    </div>
                    <span className="text-sm">{getPlatformName(comment.platform)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm  max-w-md">
                  <div className="truncate" title={comment.content}>
                    {comment.content}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {comment.publishedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge 
                    variant={comment.classification === 'racista' ? 'destructive' : 'secondary'}
                    className={comment.classification === 'racista' 
                      ? 'bg-primary text-white' 
                      : 'bg-accent-foreground text-muted'
                    }
                  >
                    {comment.classification}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {comment.accuracy}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {analise!.ownerId === currentUserId ? (
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                          <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    <span className="">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with pagination */}
      {totalPages > 1 && (
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Mostrando {startIndex + 1} até {Math.min(startIndex + itemsPerPage, analise?.comentarios.length!)} de {analise?.comentarios.length!} análises
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="text-sm text-muted-foreground">...</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
      )}
    </div>
  );
};

export default DataTableComentarios;