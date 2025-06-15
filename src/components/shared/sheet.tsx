
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Eye, Calendar, Hash, MessageSquare, Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

type SheetProps = {
    comentario : {
      id: string;
      platform: 'x' | 'instagram' | 'bluesky';
      content: string;
      publishedAt: string;
      classification: 'racista' | 'não racista';
      accuracy: number;
    },
    OwnerId : string,
    AnaliseId: string,
    CurrentId: string
}

export default function SheetComentarios({comentario, OwnerId, AnaliseId, CurrentId} : SheetProps){
    const eDono = OwnerId === CurrentId ? true : false
    const [classification, setClassification] = useState(comentario.classification)

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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const handleSave = () => {
        // Aqui você pode implementar a lógica para salvar as alterações
        console.log('Salvando classificação:', classification)
    }

    const handleClassificationChange = (value: string) => {
        if (value === 'racista' || value === 'não racista') {
            setClassification(value)
        }
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent">
                    <Eye className="h-4 w-4 text-primary" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[600px] overflow-y-auto">
                <SheetHeader className="space-y-4 pb-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <SheetTitle className="text-xl font-semibold">Detalhes do Comentário</SheetTitle>
                            <SheetDescription className="text-sm text-muted-foreground">
                                {eDono ? 'Visualize e edite os detalhes do comentário' : 'Visualização dos detalhes do comentário'}
                            </SheetDescription>
                        </div>
                    </div>
                </SheetHeader>
                
                <div className="space-y-6 py-6">
                    {/* ID do Comentário */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Hash className="h-4 w-4 text-muted-foreground" />
                            <Label className="text-sm font-medium text-foreground">ID do Comentário</Label>
                        </div>
                        <div className="p-3  rounded-lg border border-border">
                            <p className="text-sm font-mono text-foreground break-all">{comentario.id}</p>
                        </div>
                    </div>

                    {/* Plataforma */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><MessageSquare className="h-4 w-4 text-muted-foreground" /></span>
                            <Label className="text-sm font-medium text-foreground">Plataforma</Label>
                        </div>
                        <div className="flex items-center gap-3 p-3  rounded-lg border border-border">
                            <span className="text-2xl">{getPlatformIcon(comentario.platform)}</span>
                            <span className="font-medium text-foreground capitalize">{comentario.platform}</span>
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <Label className="text-sm font-medium text-foreground">Conteúdo</Label>
                        </div>
                        <div className="p-4  rounded-lg border border-border">
                            <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">{comentario.content}</p>
                            <div className="mt-3 pt-3 border-t border-border">
                                <span className="text-xs text-muted-foreground">{comentario.content.length} caracteres</span>
                            </div>
                        </div>
                    </div>

                    {/* Data de Publicação */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <Label className="text-sm font-medium text-foreground">Data de Publicação</Label>
                        </div>
                        <div className="flex items-center gap-3 p-3  rounded-lg border border-border">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium text-foreground">{formatDate(comentario.publishedAt)}</span>
                        </div>
                    </div>

                    {/* Classificação */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium text-foreground">Classificação</Label>
                        {eDono ? (
                            <Select value={classification} onValueChange={handleClassificationChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione a classificação" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="racista">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-destructive rounded-full"></div>
                                            Racista
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="não racista">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            Não Racista
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        ) : (
                            <div className="flex items-center gap-3 p-3  rounded-lg border border-border">
                                <div className={`w-4 h-4 rounded-full ${
                                    comentario.classification === 'racista' ? 'bg-destructive' : 'bg-green-500'
                                }`}></div>
                                <span className="font-medium text-foreground capitalize">
                                    {comentario.classification}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Precisão da Análise */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium text-foreground">Precisão da Análise</Label>
                        <div className="p-4  rounded-lg border border-border">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold ">{comentario.accuracy}%</span>
                                    <span className="text-sm text-muted-foreground">Confiança</span>
                                </div>
                                <div className="w-full bg-secondary rounded-full h-3">
                                    <div 
                                        className={`h-3 rounded-full transition-all duration-500 ${
                                            comentario.accuracy >= 80 ? 'bg-green-500' :
                                            comentario.accuracy >= 60 ? 'bg-yellow-500' : 'bg-destructive'
                                        }`}
                                        style={{ width: `${comentario.accuracy}%` }}
                                    ></div>
                                </div>
                                <div className="text-xs text-muted-foreground text-center">
                                    {comentario.accuracy >= 80 ? 'Alta confiança' :
                                     comentario.accuracy >= 60 ? 'Média confiança' : 'Baixa confiança'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SheetFooter className="border-t border-border pt-6 gap-3">
                    {eDono && (
                        <Button type="button" onClick={handleSave} className="bg-primary hover:bg-primary/90">
                            Salvar Alterações
                        </Button>
                    )}
                    <SheetClose asChild>
                        <Button variant="outline">Fechar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}