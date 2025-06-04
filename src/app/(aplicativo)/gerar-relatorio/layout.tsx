'use client'
import { AnalysesDatatableProvider } from "@/hooks/use-analyses-datatable";
import { PropsWithChildren } from "react";

export default function GerarRelatorioLayout({ children }: PropsWithChildren) {
  return <AnalysesDatatableProvider>{children}</AnalysesDatatableProvider>;
}
