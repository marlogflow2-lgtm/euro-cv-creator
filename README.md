# JobPass

JobPass é um Employment OS para imigrantes: transforma origem, destino, profissão, idioma e histórico real do usuário em um pacote prático para começar a procurar emprego no novo país.

## MVP

- onboarding por origem, destino, profissão e idioma;
- importação conceitual por PDF/foto/texto ou criação do zero;
- currículo adaptado e orientação ATS;
- adaptação orientada a uma descrição de vaga;
- mensagens para WhatsApp/presencial, e-mail e LinkedIn;
- kit de preparação para entrevista;
- portais, termos de busca e plano de candidatura de 7 dias;
- CRM simples de candidaturas;
- estrutura de JobPass Pro/checkout desacoplada.

A primeira validação comercial é Brasil → Espanha/Portugal. A arquitetura de produto usa origem → destino → profissão → idioma para permitir expansão.

## Regra de integridade

O produto não deve inventar experiências, empresas, resultados, qualificações ou competências. Informações migratórias, legais e de direito ao trabalho devem usar fontes oficiais, com data de atualização.

## Desenvolvimento

```sh
npm install
npm run dev
npm run build
npm run lint
```

Projeto baseado em TanStack Start, React, TypeScript e Tailwind.
