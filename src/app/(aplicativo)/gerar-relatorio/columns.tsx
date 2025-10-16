"use client";

import { Analysis } from "@/types/analysis";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Analysis>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nome da Análise",
  },
  {
    accessorKey: "visibility",
    header: "Visibilidade",
    cell: ({ row }) => {
      let visibility;

      if (row.original.visibility === "public") {
        visibility = "Público";
      } else {
        visibility = "Privado";
      }

      return <Badge variant="outline">{visibility}</Badge>;
    },
  },
  {
    accessorKey: "startAt",
    header: "Data de Início",
    cell: ({ row }) =>
      new Date(row.original.startAt).toLocaleTimeString('pt-BR')
  },
  {
    accessorKey: "endAt",
    header: "Data de Término",
    cell: ({ row }) =>
      new Date(row.original.endAt).toLocaleTimeString('pt-BR')
  },
  {
    accessorKey: "messagesQuantity",
    header: "Qtd. Mensagens",
  },
  {
    accessorKey: "averageAccuracy",
    header: "Precisão Média",
    cell: ({ row }) => `${(row.original.averageAccuracy * 100).toFixed(2)}%`,
  },
  {
    accessorKey: "userId",
    header: "ID do Usuário",
  },
  {
    accessorKey: "classifierId",
    header: "ID do Classificador",
  },
];
