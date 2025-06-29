import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Video, 
  Award, 
  FileText, 
  Calculator, 
  Globe, 
  Brain, 
  Code, 
  FlaskConical, 
  UserCheck, 
  Clock, 
  Atom, 
  Telescope, 
  User, 
  Music, 
  Palette, 
  MessageSquare, 
  PenTool, 
  TreePine, 
  DollarSign, 
  TrendingUp, 
  Wrench, 
  Search, 
  Presentation, 
  Folder, 
  Target, 
  Lightbulb, 
  Scale, 
  Crown,
  Zap,
  Database,
  BarChart3,
  Headphones,
  Mic,
  Monitor,
  Gamepad2,
  Camera,
  Image,
  Settings,
  Shield,
  Map,
  Calendar,
  Edit,
  Smartphone,
  Wifi,
  Activity,
  Heart,
  Building,
  Layers,
  Book,
  Cpu,
  Server,
  Lock,
  Eye,
  Play,
  Film,
  Tv,
  Radio,
  Bookmark,
  Star,
  Trophy,
  Medal,
  Badge,
  CheckCircle,
  Timer,
  Bell,
  Mail,
  Phone,
  Home,
  Car,
  Plane,
  Ship,
  Rocket,
  Compass,
  Navigation,
  Sun,
  Moon,
  CloudRain,
  Wind,
  Thermometer,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Dog,
  Cat,
  Apple,
  Coffee,
  Pizza,
  Baby,
  UserPlus,
  UserMinus,
  UserX,
  UsersRound,
  Contact,
  IdCard,
  ShieldCheck,
  Fingerprint,
  Scan,
  QrCode,
  Tag,
  Link,
  Share,
  Upload,
  Download,
  Archive,
  Trash,
  Copy,
  Save,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Menu,
  Grid,
  Move,
  RotateCw,
  RefreshCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Volume2,
  VolumeX,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Disc,
  Speaker,
  Battery,
  Signal,
  Bluetooth,
  Usb,
  Power,
  HardDrive,
  MemoryStick,
  Tablet,
  Laptop,
  Keyboard,
  Mouse,
  Printer,
  Webcam,
  Router,
  Antenna,
  CircuitBoard,
  MousePointer,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Quote,
  Code2,
  Terminal,
  GitBranch,
  Github,
  Folder as FolderIcon,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  Clipboard,
  Scissors,
  Paintbrush,
  Ruler,
  Eraser,
  Brush,
  PaintBucket,
  Palette as PaletteIcon,
  Pen,
  Highlighter,
  Square,
  Circle,
  Triangle,
  Diamond,
  Hexagon,
  X,
  Check,
  Info,
  HelpCircle,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Loader,
  RefreshCcw,
  History,
  Undo,
  Redo,
  Flag,
  Bookmark as BookmarkIcon,
  Tags,
  Hash,
  AtSign,
  Percent,
  ExternalLink,
  Share2,
  Forward,
  Reply,
  Send,
  Inbox,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MessageSquare as MessageIcon,
  Bell as BellIcon
} from 'lucide-react';

import { ProjectTemplate } from '../projectTemplates';

export const educationTemplates: ProjectTemplate[] = [
  {
    id: 'lms-platform',
    name: 'Sistema LMS',
    description: 'Learning Management System completo para instituições',
    icon: GraduationCap,
    complexity: 'hard',
    features: [
      'Gestão de cursos',
      'Matrículas online',
      'Avaliações automatizadas',
      'Fórum de discussão',
      'Certificados digitais',
      'Analytics de aprendizado'
    ]
  },
  {
    id: 'online-classroom',
    name: 'Sala de Aula Virtual',
    description: 'Ambiente virtual para aulas online',
    icon: Video,
    complexity: 'hard',
    features: [
      'Videoconferência HD',
      'Compartilhamento de tela',
      'Quadro interativo',
      'Chat em tempo real',
      'Gravação de aulas',
      'Breakout rooms'
    ]
  },
  {
    id: 'student-portal',
    name: 'Portal do Estudante',
    description: 'Portal completo para vida acadêmica',
    icon: User,
    complexity: 'medium',
    features: [
      'Notas e frequência',
      'Horário de aulas',
      'Biblioteca digital',
      'Calendário acadêmico',
      'Financeiro estudantil',
      'Comunicação institucional'
    ]
  },
  {
    id: 'quiz-builder',
    name: 'Construtor de Quiz',
    description: 'Crie questionários e avaliações interativas',
    icon: CheckCircle,
    complexity: 'medium',
    features: [
      'Múltiplos tipos de questão',
      'Banco de questões',
      'Correção automática',
      'Relatórios de desempenho',
      'Anti-cola integrado',
      'Feedback personalizado'
    ]
  },
  {
    id: 'flashcard-app',
    name: 'Flashcards Inteligentes',
    description: 'Sistema de cartões de memória com algoritmo de repetição',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Repetição espaçada',
      'Múltiplos formatos',
      'Sincronização multi-device',
      'Estatísticas de aprendizado',
      'Decks compartilhados',
      'Gamificação'
    ]
  },
  {
    id: 'virtual-lab',
    name: 'Laboratório Virtual',
    description: 'Simulações científicas e experimentos virtuais',
    icon: FlaskConical,
    complexity: 'hard',
    features: [
      'Simulações 3D',
      'Experimentos interativos',
      'Instrumentos virtuais',
      'Relatórios automáticos',
      'Múltiplas disciplinas',
      'Realidade virtual'
    ]
  },
  {
    id: 'language-learning',
    name: 'Aprendizado de Idiomas',
    description: 'Plataforma interativa para aprender idiomas',
    icon: Globe,
    complexity: 'hard',
    features: [
      'Reconhecimento de voz',
      'Lições adaptativas',
      'Conversação com IA',
      'Jogos educativos',
      'Progresso personalizado',
      'Certificação oficial'
    ]
  },
  {
    id: 'math-solver',
    name: 'Solucionador Matemático',
    description: 'IA para resolver problemas matemáticos',
    icon: Calculator,
    complexity: 'hard',
    features: [
      'Reconhecimento de equações',
      'Passos detalhados',
      'Múltiplas áreas da matemática',
      'Gráficos interativos',
      'Exercícios similares',
      'Explicações em vídeo'
    ]
  },
  {
    id: 'research-assistant',
    name: 'Assistente de Pesquisa',
    description: 'Ferramenta para pesquisa acadêmica',
    icon: Search,
    complexity: 'medium',
    features: [
      'Busca em bases científicas',
      'Gerenciamento de referências',
      'Análise de citações',
      'Formatação automática',
      'Colaboração em pesquisa',
      'Detecção de plágio'
    ]
  },
  {
    id: 'grade-book',
    name: 'Diário de Classe Digital',
    description: 'Sistema para professores gerenciarem notas e frequência',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Lançamento de notas',
      'Controle de frequência',
      'Relatórios automáticos',
      'Comunicação com pais',
      'Planejamento de aulas',
      'Analytics de turma'
    ]
  },
  {
    id: 'coding-playground',
    name: 'Playground de Programação',
    description: 'Ambiente online para aprender programação',
    icon: Code,
    complexity: 'hard',
    features: [
      'Editor de código online',
      'Múltiplas linguagens',
      'Execução em tempo real',
      'Projetos colaborativos',
      'Desafios de código',
      'Mentoria automática'
    ]
  },
  {
    id: 'attendance-system',
    name: 'Sistema de Presença',
    description: 'Controle inteligente de presença',
    icon: UserCheck,
    complexity: 'medium',
    features: [
      'Check-in por QR Code',
      'Reconhecimento facial',
      'Relatórios automáticos',
      'Notificações para pais',
      'Geolocalização',
      'Dashboard administrativo'
    ]
  },
  {
    id: 'timetable-generator',
    name: 'Gerador de Horários',
    description: 'Sistema inteligente para criação de horários escolares',
    icon: Calendar,
    complexity: 'hard',
    features: [
      'Otimização automática',
      'Restrições personalizadas',
      'Múltiplas visualizações',
      'Detecção de conflitos',
      'Backup e versionamento',
      'Integração com sistemas'
    ]
  },
  {
    id: 'library-management',
    name: 'Sistema de Biblioteca',
    description: 'Gestão completa de biblioteca escolar',
    icon: Book,
    complexity: 'medium',
    features: [
      'Catálogo digital',
      'Empréstimos online',
      'Renovação automática',
      'Multas e reservas',
      'Busca avançada',
      'Relatórios estatísticos'
    ]
  },
  {
    id: 'admission-system',
    name: 'Sistema de Admissão',
    description: 'Processo seletivo digital para instituições',
    icon: FileText,
    complexity: 'hard',
    features: [
      'Inscrições online',
      'Provas digitais',
      'Correção automática',
      'Ranking automático',
      'Documentação digital',
      'Portal do candidato'
    ]
  },
  {
    id: 'parent-portal',
    name: 'Portal dos Pais',
    description: 'Comunicação escola-família',
    icon: Users,
    complexity: 'medium',
    features: [
      'Acompanhamento acadêmico',
      'Comunicação direta',
      'Calendário escolar',
      'Financeiro',
      'Autorizações digitais',
      'Notificações push'
    ]
  },
  {
    id: 'skill-assessment',
    name: 'Avaliação de Competências',
    description: 'Sistema para avaliar habilidades e competências',
    icon: Target,
    complexity: 'hard',
    features: [
      'Testes adaptativos',
      'Múltiplas competências',
      'Relatórios detalhados',
      'Recomendações personalizadas',
      'Banco de questões',
      'Analytics avançado'
    ]
  },
  {
    id: 'career-guidance',
    name: 'Orientação Profissional',
    description: 'Sistema de orientação vocacional',
    icon: Compass,
    complexity: 'medium',
    features: [
      'Testes vocacionais',
      'Exploração de carreiras',
      'Mercado de trabalho',
      'Universidades e cursos',
      'Mentoria profissional',
      'Planejamento de carreira'
    ]
  },
  {
    id: 'homework-helper',
    name: 'Assistente de Lição de Casa',
    description: 'IA para auxiliar nos estudos',
    icon: Lightbulb,
    complexity: 'hard',
    features: [
      'Resolução de exercícios',
      'Explicações didáticas',
      'Múltiplas disciplinas',
      'Dicas de estudo',
      'Cronograma de estudos',
      'Progresso personalizado'
    ]
  },
  {
    id: 'presentation-maker',
    name: 'Criador de Apresentações',
    description: 'Ferramenta para criar apresentações educativas',
    icon: Presentation,
    complexity: 'medium',
    features: [
      'Templates educativos',
      'Colaboração em tempo real',
      'Biblioteca de recursos',
      'Animações interativas',
      'Apresentação remota',
      'Analytics de engajamento'
    ]
  },
  {
    id: 'mind-mapping',
    name: 'Mapas Mentais',
    description: 'Ferramenta para criar mapas mentais educativos',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Interface drag-and-drop',
      'Colaboração em equipe',
      'Templates variados',
      'Exportação múltipla',
      'Integração com cursos',
      'Biblioteca de ícones'
    ]
  },
  {
    id: 'note-sharing',
    name: 'Compartilhamento de Notas',
    description: 'Plataforma para compartilhar anotações de aula',
    icon: Share,
    complexity: 'medium',
    features: [
      'Upload de notas',
      'Sistema de avaliação',
      'Busca por disciplina',
      'Colaboração estudantil',
      'Moderação de conteúdo',
      'Pontuação por contribuição'
    ]
  },
  {
    id: 'exam-scheduler',
    name: 'Agendador de Provas',
    description: 'Sistema para agendar e gerenciar exames',
    icon: Clock,
    complexity: 'medium',
    features: [
      'Calendário de provas',
      'Notificações automáticas',
      'Salas e recursos',
      'Conflitos de horário',
      'Relatórios de ocupação',
      'Integração com LMS'
    ]
  },
  {
    id: 'tutoring-platform',
    name: 'Plataforma de Tutoria',
    description: 'Conecte alunos com tutores especializados',
    icon: Users,
    complexity: 'hard',
    features: [
      'Matching inteligente',
      'Videochamadas integradas',
      'Agendamento flexível',
      'Sistema de pagamento',
      'Avaliações de tutores',
      'Progresso do aluno'
    ]
  },
  {
    id: 'course-creator',
    name: 'Criador de Cursos',
    description: 'Ferramenta para criar cursos online',
    icon: Video,
    complexity: 'hard',
    features: [
      'Editor de conteúdo rico',
      'Upload de vídeos',
      'Quiz integrados',
      'Certificação automática',
      'Analytics de engajamento',
      'Monetização de cursos'
    ]
  },
  {
    id: 'plagiarism-detector',
    name: 'Detector de Plágio',
    description: 'Sistema para detectar plágio acadêmico',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Análise de similaridade',
      'Múltiplas bases de dados',
      'Relatórios detalhados',
      'Integração com LMS',
      'Verificação em tempo real',
      'API para desenvolvedores'
    ]
  },
  {
    id: 'scholarship-finder',
    name: 'Buscador de Bolsas',
    description: 'Plataforma para encontrar oportunidades de bolsa',
    icon: Trophy,
    complexity: 'medium',
    features: [
      'Base de dados de bolsas',
      'Filtros personalizados',
      'Alertas de novas bolsas',
      'Perfil do candidato',
      'Acompanhamento de inscrições',
      'Dicas de candidatura'
    ]
  },
  {
    id: 'virtual-campus',
    name: 'Campus Virtual',
    description: 'Ambiente virtual completo para universidades',
    icon: Building,
    complexity: 'hard',
    features: [
      'Tour virtual 3D',
      'Mapas interativos',
      'Informações em tempo real',
      'Eventos e atividades',
      'Rede social estudantil',
      'Realidade aumentada'
    ]
  },
  {
    id: 'textbook-exchange',
    name: 'Troca de Livros',
    description: 'Marketplace para troca de livros didáticos',
    icon: Book,
    complexity: 'medium',
    features: [
      'Catálogo de livros',
      'Sistema de troca',
      'Avaliação de condição',
      'Localização geográfica',
      'Sistema de reputação',
      'Chat integrado'
    ]
  },
  {
    id: 'study-planner',
    name: 'Planejador de Estudos',
    description: 'Organize sua rotina de estudos',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Cronograma personalizado',
      'Técnicas de estudo',
      'Lembretes inteligentes',
      'Progresso visual',
      'Metas de aprendizado',
      'Analytics de produtividade'
    ]
  }
];
