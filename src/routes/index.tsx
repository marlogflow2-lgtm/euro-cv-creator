import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, FileText, Languages, MessageSquareText, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JobPass — Seu kit de emprego internacional" },
    { name: "description", content: "Currículo, candidatura e preparação para entrevistas adaptados ao país onde você quer trabalhar." },
  ]}),
  component: Index,
});

const features = [
  [FileText, "CV adaptado", "Currículo profissional, versão ATS e adaptação ao padrão do país de destino."],
  [Languages, "Idioma local", "Versão no idioma local sem inventar experiências, empresas ou competências."],
  [MessageSquareText, "Mensagens prontas", "Carta, e-mail, WhatsApp, LinkedIn, telefone e apresentação presencial."],
  [Search, "Aplicar para uma vaga", "Cole a descrição da vaga e adapte perfil, competências, carta e mensagem."],
  [BriefcaseBusiness, "Plano de candidatura", "Termos de busca, portais de emprego e plano prático de aplicação por 7 dias."],
  [ShieldCheck, "Informação responsável", "Requisitos legais devem usar fontes oficiais e data de atualização — nunca palpites da IA."],
];

function Index() {
  return <div className="min-h-dvh bg-ivory text-ink">
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-forest font-semibold text-paper">J</span><div><b className="text-lg">JobPass</b><p className="text-[10px] uppercase tracking-[.18em] text-warm-muted">Employment OS</p></div></Link>
        <Button asChild className="rounded-full"><Link to="/criar">Criar meu JobPass</Link></Button>
      </div>
    </header>
    <main>
      <section className="border-b border-ink/10 bg-[linear-gradient(120deg,#163f35_0%,#245f50_52%,#b06d4f_100%)] text-paper">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-sand">Chegue preparado para procurar emprego</p>
            <h1 className="max-w-[13ch] text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl">Seu currículo não deveria atravessar a fronteira sem adaptação.</h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-paper/80">Crie currículo, mensagens, carta de apresentação, preparação para entrevistas e um plano de busca adaptados ao país e à profissão que você escolheu.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full bg-paper text-forest hover:bg-sand"><Link to="/criar">Montar meu pacote <ArrowRight /></Link></Button><span className="self-center text-sm text-paper/70">Brasil → Espanha e Portugal na primeira validação</span></div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-paper/70">Seu JobPass inclui</p>
            <div className="mt-5 space-y-3">{["Currículo adaptado + ATS","Versão no idioma local","Carta de apresentação","WhatsApp, e-mail e LinkedIn","Roteiro de entrevista","Sites + termos de busca","Plano de aplicação de 7 dias"].map(x=><div key={x} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"><span className="text-sand">✓</span><span>{x}</span></div>)}</div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Um pacote, não só um PDF</p><h2 className="mt-3 max-w-[18ch] text-4xl font-semibold tracking-tight">Tudo para começar a se candidatar no novo país.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{features.map(([Icon,t,d]:any)=><article key={t} className="rounded-2xl border border-ink/10 bg-paper p-6"><Icon className="size-6 text-forest"/><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-warm-muted">{d}</p></article>)}</div></section>
      <section className="border-y border-ink/10 bg-paper"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Motor global</p><h2 className="mt-3 text-3xl font-semibold">Origem → destino → profissão → idioma.</h2><p className="mt-3 max-w-2xl text-warm-muted">A base nasce extensível para outros mercados. A validação comercial começa focada em Brasil → Espanha/Portugal e pode crescer sem reconstruir o produto.</p></div><Button asChild size="lg" className="rounded-full"><Link to="/criar">Começar agora <ArrowRight/></Link></Button></div></div></section>
    </main>
    <footer className="bg-forest-deep px-5 py-10 text-center text-sm text-sand">JobPass · Ferramentas de preparação profissional para quem está construindo uma vida em outro país.</footer>
  </div>
}