
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
    <div className="bg-white rounded-lg border border-gray-200 w-full">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID Comentário
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plataforma
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Conteúdo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publicado em
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Classificação
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acurácia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/*mapear os comentarios da analise*/ }
            {analise?.comentarios.map((comment) => (
              <tr key={comment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {comment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${getPlatformColor(comment.platform)}`}>
                      {getPlatformIcon(comment.platform)}
                    </div>
                    <span className="text-sm text-gray-900">{getPlatformName(comment.platform)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                  <div className="truncate" title={comment.content}>
                    {comment.content}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {comment.publishedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge 
                    variant={comment.classification === 'racista' ? 'destructive' : 'secondary'}
                    className={comment.classification === 'racista' 
                      ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }
                  >
                    {comment.classification}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {comment.accuracy}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {analise.ownerId === currentUserId ? (
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
                    <span className="text-gray-400">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with pagination */}
      <div className="bg-white px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Mostrando 1 até 10 de {analise?.comentarios.length} comentários
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <div className="flex space-x-1">
            {[totalPages].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTableComentarios;