import { mockAnalyses } from "@/data/mockAnalysis"
import DetalhesAnaliseClient from "./detalhesanalise"

export default async function DetalhesAnalisePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const userId = "user1"
  const analise = mockAnalyses.find((analise) => analise.id === slug)

  return (
    <DetalhesAnaliseClient
      analise={analise}
      userId={userId}
    />
  )
}

export async function generateStaticParams() {
  return mockAnalyses.map((item) => ({
    slug: item.id,
  }))
}
