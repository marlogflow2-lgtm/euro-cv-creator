export type Experience = {
  cargo: string;
  empresa: string;
  local: string;
  inicio: string;
  fim: string;
  descricao: string;
};

export type Education = {
  curso: string;
  instituicao: string;
  local: string;
  ano: string;
};

export type Language = {
  idioma: string;
  nivel: string; // CEFR A1..C2 / Nativo
};

export type CVData = {
  nome: string;
  titulo: string;
  cidade: string;
  pais: string;
  email: string;
  telefone: string;
  linkedin: string;
  dataNascimento: string;
  nacionalidade: string;
  perfil: string;
  experiencias: Experience[];
  formacao: Education[];
  idiomas: Language[];
  competencias: string[];
};

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2", "Nativo"];

export const sampleCV: CVData = {
  nome: "Mariana Ferreira Costa",
  titulo: "Engenheira de Software",
  cidade: "Lisboa",
  pais: "Portugal",
  email: "m.ferreira@exemplo.pt",
  telefone: "+351 912 000 000",
  linkedin: "linkedin.com/in/mferreiracosta",
  dataNascimento: "12/04/1992",
  nacionalidade: "Portuguesa",
  perfil:
    "Engenheira de software com nove anos de experiência em sistemas distribuídos, especializada em plataformas de dados e liderança de equipas multidisciplinares em contextos regulados.",
  experiencias: [
    {
      cargo: "Engenheira de Software Sénior",
      empresa: "Lusitana Tech",
      local: "Lisboa, PT",
      inicio: "Mar 2021",
      fim: "Atual",
      descricao:
        "Arquitetura de microsserviços para a plataforma de dados; liderança técnica de 6 engenheiros; redução de 40% no custo de infraestrutura cloud.",
    },
    {
      cargo: "Desenvolvedora Backend",
      empresa: "Atlântico Digital",
      local: "Porto, PT",
      inicio: "Jun 2016",
      fim: "Fev 2021",
      descricao:
        "Desenvolvimento de APIs de pagamentos em Python e PostgreSQL para clientes em quatro países europeus.",
    },
  ],
  formacao: [
    {
      curso: "Mestrado em Engenharia Informática",
      instituicao: "Instituto Superior Técnico",
      local: "Lisboa, PT",
      ano: "2014",
    },
  ],
  idiomas: [
    { idioma: "Português", nivel: "Nativo" },
    { idioma: "Inglês", nivel: "C1" },
    { idioma: "Alemão", nivel: "B1" },
  ],
  competencias: ["Kubernetes", "Python", "AWS", "PostgreSQL", "Terraform"],
};

export const emptyCV: CVData = {
  nome: "",
  titulo: "",
  cidade: "",
  pais: "",
  email: "",
  telefone: "",
  linkedin: "",
  dataNascimento: "",
  nacionalidade: "",
  perfil: "",
  experiencias: [
    { cargo: "", empresa: "", local: "", inicio: "", fim: "", descricao: "" },
  ],
  formacao: [{ curso: "", instituicao: "", local: "", ano: "" }],
  idiomas: [{ idioma: "", nivel: "B1" }],
  competencias: [],
};
