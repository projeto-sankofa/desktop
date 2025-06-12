
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreHorizontal, FileEdit, Trash2, Eye } from 'lucide-react';

export interface Analysis {
  id: string;
  analysisNumber: string;
  title: string;
  userName: string;
  userAvatar?: string;
  analysisDate: string;
  quantityEvaluated: number;
  classification: 'racistas' | 'não racistas';
  modelAccuracy: string;
  ownerId: string;
  networks: {
    ig: boolean,
    x: boolean,
    bs: boolean
  },
  comentarios: {
      id: string;
      platform: 'x' | 'instagram' | 'bluesky';
      content: string;
      publishedAt: string;
      classification: 'racista' | 'não racista';
      accuracy: number;
  }[]
}

interface DataTableProps {
  data: Analysis[];
  title?: string;
  currentUserId?: string;
}

const classificationColors = {
  'racistas': 'bg-primary text-white',
  'não racistas': 'bg-accent-foreground text-muted',
};

export function DataTable({ data, title = "Todas as Análises", currentUserId = "user1" }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [classificationFilter, setClassificationFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtered data based on search and filters
  const filteredData = useMemo(() => {
    return data.filter(analysis => {
      const matchesSearch = 
        analysis.analysisNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        analysis.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        analysis.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesClassification = classificationFilter === 'all' || analysis.classification === classificationFilter;
      
      return matchesSearch && matchesClassification;
    });
  }, [data, searchTerm, classificationFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Stats calculation
  const stats = useMemo(() => {
    const thisMonth = data.length;
    const racistas = data.filter(analysis => analysis.classification === 'racistas').length;
    const naoRacistas = data.filter(analysis => analysis.classification === 'não racistas').length;
    
    return { thisMonth, racistas, naoRacistas };
  }, [data]);

  const resetFilters = () => {
    setSearchTerm('');
    setClassificationFilter('all');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header with stats */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-sm text-muted-foreground">Total de Análises Este Mês</p>
              <p className="text-2xl font-bold text-foreground">{stats.thisMonth}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Racistas</p>
              <p className="text-2xl font-bold text-destructive">{stats.racistas}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Não Racistas</p>
              <p className="text-2xl font-bold text-green-600">{stats.naoRacistas}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar análise ou usuário"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select value={classificationFilter} onValueChange={setClassificationFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Classificação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Classificações</SelectItem>
                <SelectItem value="racistas">Racistas</SelectItem>
                <SelectItem value="não racistas">Não Racistas</SelectItem>
              </SelectContent>
            </Select>
            {(searchTerm || classificationFilter !== 'all') && (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Limpar
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Número da Análise</TableHead>
              <TableHead>Título da Análise</TableHead>
              <TableHead>Nome do Usuário</TableHead>
              <TableHead>Data da Análise</TableHead>
              <TableHead>Quantidade Avaliada</TableHead>
              <TableHead>Classificação</TableHead>
              <TableHead>Acurácia do Modelo</TableHead>
              <TableHead className="w-32">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((analysis) => (
              <TableRow key={analysis.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{analysis.analysisNumber}</TableCell>
                <TableCell className="font-medium">{analysis.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        {analysis.userName.charAt(0)}
                      </span>
                    </div>
                    {analysis.userName}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{analysis.analysisDate}</TableCell>
                <TableCell className="font-medium">{analysis.quantityEvaluated.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={classificationColors[analysis.classification]}>
                    {analysis.classification}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{analysis.modelAccuracy}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link href={`http://localhost:3000/historico-de-analises/${analysis.id}`} >
                      <Eye className="w-4 h-4" />
                    </Link>
                    {currentUserId === analysis.ownerId && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <FileEdit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando {startIndex + 1} até {Math.min(startIndex + itemsPerPage, filteredData.length)} de {filteredData.length} análises
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
}