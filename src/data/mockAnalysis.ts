
import { Analysis } from '@/components/shared/DataTableAnalises';

export const mockAnalyses: Analysis[] = [
  {
    id: '1',
    analysisNumber: '#ANA001',
    title: 'Análise de Comentários do Produto A',
    userName: 'Ana Silva',
    analysisDate: '17 Dez 2024',
    quantityEvaluated: 1520,
    classification: 'não racistas',
    modelAccuracy: '94.2%',
    ownerId: 'user1',
    networks: {
      x: false,
      ig: true,
      bs: true
    }
  },
  {
    id: '2',
    analysisNumber: '#ANA002',
    title: 'Detecção de Conteúdo Ofensivo',
    userName: 'Carlos Santos',
    analysisDate: '16 Dez 2024',
    quantityEvaluated: 892,
    classification: 'racistas',
    modelAccuracy: '87.5%',
    ownerId: 'user2',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '3',
    analysisNumber: '#ANA003',
    title: 'Moderação de Fórum Online',
    userName: 'Maria Costa',
    analysisDate: '16 Dez 2024',
    quantityEvaluated: 2340,
    classification: 'não racistas',
    modelAccuracy: '96.8%',
    ownerId: 'user1',
    networks: {
      x: true,
      ig: false,
      bs: false
    }
  },
  {
    id: '4',
    analysisNumber: '#ANA004',
    title: 'Análise de Posts Suspeitos',
    userName: 'João Oliveira',
    analysisDate: '15 Dez 2024',
    quantityEvaluated: 678,
    classification: 'racistas',
    modelAccuracy: '72.3%',
    ownerId: 'user3',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '5',
    analysisNumber: '#ANA005',
    title: 'Verificação de Discurso de Ódio',
    userName: 'Fernanda Lima',
    analysisDate: '15 Dez 2024',
    quantityEvaluated: 1847,
    classification: 'racistas',
    modelAccuracy: '91.7%',
    ownerId: 'user1',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '6',
    analysisNumber: '#ANA006',
    title: 'Análise de Comentários Neutros',
    userName: 'Roberto Ferreira',
    analysisDate: '14 Dez 2024',
    quantityEvaluated: 1203,
    classification: 'não racistas',
    modelAccuracy: '85.4%',
    ownerId: 'user4',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '7',
    analysisNumber: '#ANA007',
    title: 'Detecção de Linguagem Discriminatória',
    userName: 'Juliana Mendes',
    analysisDate: '14 Dez 2024',
    quantityEvaluated: 3456,
    classification: 'racistas',
    modelAccuracy: '98.1%',
    ownerId: 'user2',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '8',
    analysisNumber: '#ANA008',
    title: 'Análise de Mensagens Privadas',
    userName: 'Pedro Rocha',
    analysisDate: '13 Dez 2024',
    quantityEvaluated: 567,
    classification: 'não racistas',
    modelAccuracy: '68.9%',
    ownerId: 'user5',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '9',
    analysisNumber: '#ANA009',
    title: 'Classificação de Tweets',
    userName: 'Camila Torres',
    analysisDate: '13 Dez 2024',
    quantityEvaluated: 2145,
    classification: 'racistas',
    modelAccuracy: '93.6%',
    ownerId: 'user1',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '10',
    analysisNumber: '#ANA010',
    title: 'Análise de Comentários de Blog',
    userName: 'Lucas Barbosa',
    analysisDate: '12 Dez 2024',
    quantityEvaluated: 987,
    classification: 'não racistas',
    modelAccuracy: '88.2%',
    ownerId: 'user6',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '11',
    analysisNumber: '#ANA011',
    title: 'Detecção de Preconceito Racial',
    userName: 'Beatriz Alves',
    analysisDate: '12 Dez 2024',
    quantityEvaluated: 1654,
    classification: 'racistas',
    modelAccuracy: '92.4%',
    ownerId: 'user2',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  },
  {
    id: '12',
    analysisNumber: '#ANA012',
    title: 'Análise de Conteúdo Educativo',
    userName: 'Rafael Gomes',
    analysisDate: '11 Dez 2024',
    quantityEvaluated: 2789,
    classification: 'não racistas',
    modelAccuracy: '97.3%',
    ownerId: 'user1',
    networks: {
      x: true,
      ig: false,
      bs: true
    }
  }
];
