import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, FileText, Globe2, Languages, MessageSquareText, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JobPass — Chegue preparado para trabalhar fora" },
    { name: "description", content: "Monte seu kit profissional para buscar emprego no exterior: currículo adaptado, ATS, mensagens, entrevistas e plano de candidatura." },
    { property: "og:title", content: "JobPass — Seu kit de emprego internacional" },
    { property: "og:description", content: "Tudo que você precisa para começar a procurar emprego no novo país, em um só lugar." },
  ]}),
  component: Index,
});

const deliverables = [
  [FileText, "Currículo adaptado", "Um CV profissional ajustado ao padrão do país de destino."],
  [BadgeCheck, "Versão ATS", "Estrutura limpa para sistemas de recrutamento, sem inventar informações."],
  [Languages, "Idioma local", "Seu material preparado para o idioma usado nas candidaturas."],
  [MessageSquareText, "Mensagens prontas", "WhatsApp, e-mail, LinkedIn, telefone e apresentação presencial."],
  [Search, "Adaptação por vaga", "Cole uma vaga e direcione seu material aos requisitos que você realmente possui."],
  [BriefcaseBusiness, "Plano de 7 dias", "Portais, termos de busca e uma rotina prática para começar a aplicar."],
];

const steps = [
  ["01", "Escolha seu destino", "Informe de onde você vem, para onde vai e em qual área quer trabalhar."],
  ["02", "Conte sua experiência", "Cole seu currículo, envie o arquivo ou comece do zero. Você não precisa escrever bonito."],
  ["03", "Receba seu JobPass", "Abra seu painel com CV, mensagens, entrevista, busca de vagas e plano de candidatura."],
];

const faq = [
  ["O JobPass consegue emprego para mim?", "Não. O JobPass prepara seu material e sua estratégia de candidatura. A contratação depende das empresas e do seu processo seletivo."],
  ["A ferramenta inventa experiência para melhorar meu currículo?", "Não. O JobPass organiza e profissionaliza somente as informações que você fornecer."],
  ["Funciona para quem ainda está no Brasil?", "Sim. Você pode preparar seu material antes da mudança e começar a mapear vagas e termos usados no destino."],
  ["Quais países estarão disponíveis?", "A estrutura é internacional. A primeira versão comercial será aprofundada para brasileiros buscando oportunidades na Espanha e em Portugal, antes da expansão para outros destinos."],
];

function Brand(){return <Link to="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-forest font-bold text-paper">J</span><div className="leading-none"><b className="text-lg tracking-tight">JobPass</b><p className="mt-1 text-[9px] font-semibold uppercase tracking-[.2em] text-warm-muted">Emprego internacional</p></div></Link>}

function ProductMockup(){
 return <div className="relative mx-auto max-w-[590px]">
  <div className="absolute -inset-8 rounded-[2.5rem] bg-white/10 blur-2xl"/>
  <img
   src="/jobpass-dashboard.svg"
   alt="Painel do JobPass com currículo, mensagens, entrevista e acompanhamento de candidaturas"
   className="relative w-full rounded-[2rem] shadow-2xl"
   loading="eager"
  />
 </div>
}

function Index(){
 return <div className="min-h-dvh bg-ivory text-ink">
  <header className="sticky top-0 z-30 border-b border-ink/10 bg-ivory/90 backdrop-blur">
   <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
    <Brand/>
    <nav className="hidden items-center gap-7 text-sm text-warm-muted md:flex"><a href="#recebe" className="hover:text-ink">O que você recebe</a><a href="#como" className="hover:text-ink">Como funciona</a><a href="#preco" className="hover:text-ink">Preço</a><a href="#faq" className="hover:text-ink">Dúvidas</a></nav>
    <div className="flex flex-col items-center gap-2">
     <Button asChild className="rounded-full px-5"><Link to="/criar">Criar meu JobPass</Link></Button>
     <div className="flex max-w-[260px] items-center justify-center gap-2 rounded-full border border-clay/25 bg-sand/80 px-3 py-1.5 text-center shadow-sm">
      <span className="shrink-0 text-[11px] tracking-[.08em] text-[#b8752f]" aria-label="5 estrelas">★★★★★</span>
      <span className="text-[10px] font-medium leading-tight text-ink/75"><strong className="font-bold text-forest">+8 mil imigrantes</strong> já conseguiram emprego com nossas estratégias</span>
     </div>
    </div>
   </div>
  </header>

  <main>
   <section className="relative overflow-hidden bg-[linear-gradient(125deg,#102e28_0%,#1c5145_55%,#70483b_100%)] text-paper">
    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,.11),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(220,173,128,.2),transparent_28%)]"/>
    <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
     <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-paper/80"><Globe2 className="size-3.5"/> Para quem quer trabalhar em outro país</div>
      <h1 className="mt-6 max-w-[13ch] text-[2.8rem] font-semibold leading-[1.02] tracking-[-.05em] sm:text-6xl lg:text-[4.3rem]">Chegue com o currículo pronto. E sabendo o que fazer depois.</h1>
      <p className="mt-6 max-w-[57ch] text-base leading-7 text-paper/75 sm:text-lg">O JobPass transforma sua experiência em um kit de candidatura adaptado ao seu destino: currículo, ATS, idioma local, mensagens, entrevista e plano para começar a buscar vagas.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><Button asChild size="lg" className="h-13 rounded-full bg-paper px-7 text-forest hover:bg-sand"><Link to="/criar">Montar meu JobPass <ArrowRight/></Link></Button><span className="text-sm text-paper/60">Leva poucos minutos para começar</span></div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/65"><span>✓ Sem inventar experiência</span><span>✓ Adaptado ao destino</span><span>✓ Pronto para usar</span></div>
     </div>
     <ProductMockup/>
    </div>
   </section>

   <section className="border-b border-ink/10 bg-paper"><div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px px-5 py-7 text-center sm:px-8 md:grid-cols-4">{[["1 kit","para toda a candidatura"],["3 etapas","para começar"],["7 dias","de plano de ação"],["2 mercados","Espanha + Portugal primeiro"]].map(([n,d])=><div key={n} className="px-3 py-3"><b className="text-xl">{n}</b><p className="mt-1 text-xs text-warm-muted">{d}</p></div>)}</div></section>

   <section id="recebe" className="scroll-mt-24 mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24">
    <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Seu pacote profissional</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Não é só um currículo.</h2><p className="mt-4 text-lg leading-7 text-warm-muted">Você recebe as peças que normalmente teria que criar, traduzir e adaptar separadamente.</p></div>
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{deliverables.map(([Icon,t,d]:any)=><article key={t} className="group rounded-2xl border border-ink/10 bg-paper p-6 transition-transform hover:-translate-y-1"><span className="grid size-11 place-items-center rounded-xl bg-forest/10"><Icon className="size-5 text-forest"/></span><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-warm-muted">{d}</p></article>)}</div>
   </section>

   <section id="como" className="scroll-mt-24 border-y border-ink/10 bg-paper"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Como funciona</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Do zero ao material pronto em três etapas.</h2><p className="mt-4 text-warm-muted">Você informa os fatos. O JobPass organiza a candidatura ao redor do mercado que escolheu.</p></div><ol className="space-y-3">{steps.map(([n,t,d])=><li key={n} className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-ink/10 bg-ivory p-5"><span className="grid size-11 place-items-center rounded-full bg-forest text-sm font-semibold text-paper">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-warm-muted">{d}</p></div></li>)}</ol></div></div></section>

   <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-2">
     <div>
      <img src="/jobpass-vacancy-adaptation.svg" alt="Exemplo visual do JobPass adaptando um currículo a uma vaga específica" className="w-full rounded-3xl shadow-[var(--shadow-paper)]" loading="lazy"/>
     </div>
     <div>
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Aplicar para uma vaga</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight">Pare de mandar o mesmo CV para todo mundo.</h2>
      <p className="mt-5 leading-7 text-warm-muted">Cole a descrição da vaga. O JobPass identifica o que pode ser destacado usando somente experiências e competências que você realmente informou.</p>
      <div className="mt-7 grid grid-cols-2 gap-3">{["Resumo","Experiência","Carta","Mensagem"].map((x,i)=><div key={x} className="rounded-xl border border-ink/10 bg-paper p-4"><span className="text-xs text-clay">0{i+1}</span><p className="mt-1 font-semibold">{x}</p></div>)}</div>
      <p className="mt-5 text-sm leading-6 text-warm-muted">A lógica é sempre a mesma: adaptar o foco sem criar empresas, resultados, qualificações ou habilidades que não existem no seu histórico.</p>
     </div>
    </div>
   </section>

   <section className="border-y border-ink/10 bg-paper">
    <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr]">
     <div>
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">O momento da compra</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight">Mostre o resultado antes de pedir o pagamento.</h2>
      <p className="mt-5 leading-7 text-warm-muted">O usuário termina o onboarding, vê que o pacote já foi preparado e consegue enxergar exatamente o que será desbloqueado: currículo, carta, mensagens, entrevista e plano de busca.</p>
      <ul className="mt-6 space-y-3 text-sm">{["Resultado concreto antes do checkout","Itens do pacote visíveis e parcialmente bloqueados","CTA direto para liberar o JobPass completo"].map(x=><li key={x} className="flex gap-3"><Check className="size-5 shrink-0 text-forest"/>{x}</li>)}</ul>
     </div>
     <img src="/jobpass-preview-locked.svg" alt="Preview do JobPass pronto com materiais bloqueados antes do pagamento" className="w-full rounded-3xl shadow-[var(--shadow-paper)]" loading="lazy"/>
    </div>
   </section>

   <section id="prova-social" className="border-y border-ink/10 bg-[#f3eee4]">
    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24">
     <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
      <div>
       <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Experiência real com imigrantes</p>
       <h2 className="mt-3 text-4xl font-semibold tracking-tight">Mais de 8 mil imigrantes já foram ajudados pelas nossas estratégias.</h2>
       <p className="mt-5 leading-7 text-warm-muted">Nossa agência já ajudou mais de 8 mil imigrantes na preparação para buscar oportunidades profissionais. O JobPass nasce justamente da migração dessa experiência para um formato digital, mais rápido, acessível e escalável.</p>
       <div className="mt-7 rounded-2xl border border-forest/15 bg-paper p-5">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-forest">Histórico da agência</p>
        <p className="mt-2 text-4xl font-semibold tracking-tight">+8.000 imigrantes</p>
        <p className="mt-2 text-sm leading-6 text-warm-muted">Pessoas já ajudadas com estratégias de preparação e busca de emprego. Agora essa experiência está sendo transformada em produto digital através do JobPass.</p>
       </div>
      </div>
      <div>
       <div className="mb-4 flex items-end justify-between gap-4">
        <div><p className="text-sm font-semibold">Histórias de quem já passou por esse processo</p><p className="mt-1 text-xs text-warm-muted">4 espaços prontos para depoimentos reais e autorizados de clientes da agência.</p></div>
        <ShieldCheck className="size-5 text-forest"/>
       </div>
       <div className="grid gap-4 sm:grid-cols-2">
        {[1,2,3,4].map((n)=><article key={n} className="rounded-2xl border border-ink/10 bg-paper p-6">
         <div className="mb-5 flex items-center gap-1 text-clay" aria-label="Espaço reservado para avaliação verificada"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
         <p className="text-sm leading-6 text-warm-muted">Espaço reservado para um relato real de cliente da agência sobre currículo, busca de vagas, entrevistas ou adaptação ao novo mercado.</p>
         <div className="mt-5 border-t border-ink/10 pt-4"><p className="text-sm font-semibold">Depoimento real #{n}</p><p className="mt-1 text-xs text-warm-muted">Nome, destino e profissão</p></div>
        </article>)}
       </div>
      </div>
     </div>
    </div>
   </section>

   <section id="preco" className="scroll-mt-24 border-y border-ink/10 bg-[#e8dfcf]"><div className="mx-auto max-w-[980px] px-5 py-20 text-center sm:px-8 sm:py-24"><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Oferta de lançamento</p><h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Comece preparado, sem gastar uma fortuna.</h2><p className="mx-auto mt-4 max-w-2xl text-warm-muted">A estrutura de pagamento será conectada ao checkout escolhido. O preço abaixo é a proposta inicial para validação do produto.</p><div className="mx-auto mt-9 max-w-lg rounded-3xl border border-ink/10 bg-paper p-7 text-left shadow-[var(--shadow-paper)] sm:p-9"><p className="text-sm font-semibold text-forest">JobPass Essencial</p><div className="mt-3 flex items-end gap-2"><span className="text-5xl font-semibold tracking-tight">€12,90</span><span className="pb-1 text-sm text-warm-muted">pagamento único</span></div><ul className="mt-7 space-y-3 text-sm">{["Currículo adaptado + ATS","Versão no idioma local","Carta e mensagens de candidatura","Preparação para entrevista","Sites e termos de busca","Plano de candidatura de 7 dias"].map(x=><li key={x} className="flex gap-3"><Check className="size-5 shrink-0 text-forest"/>{x}</li>)}</ul><Button asChild size="lg" className="mt-8 h-13 w-full rounded-full"><Link to="/criar">Criar meu JobPass <ArrowRight/></Link></Button><p className="mt-3 text-center text-[11px] text-warm-muted">Checkout ainda não conectado nesta versão.</p></div></div></section>

   <section id="faq" className="scroll-mt-24 mx-auto max-w-[980px] px-5 py-20 sm:px-8 sm:py-24"><p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Antes de começar</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Perguntas frequentes</h2><div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">{faq.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">{q}<span className="text-xl text-clay group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-6 text-warm-muted">{a}</p></details>)}</div></section>

   <section className="bg-forest-deep text-paper"><div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-8"><Sparkles className="mx-auto size-6 text-sand"/><h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight">Sua mudança já tem coisas demais para resolver. A candidatura não precisa começar do zero.</h2><Button asChild size="lg" className="mt-7 rounded-full bg-paper px-7 text-forest hover:bg-sand"><Link to="/criar">Montar meu JobPass <ArrowRight/></Link></Button></div></section>
  </main>

  <footer className="border-t border-white/10 bg-[#0b211c] text-paper"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between"><Brand/><div className="max-w-xl text-xs leading-5 text-paper/50"><div className="mb-2 flex items-center gap-2 text-paper/70"><ShieldCheck className="size-4"/> Informação responsável</div>JobPass é uma ferramenta de preparação profissional. Informações migratórias, legais e de direito ao trabalho devem ser confirmadas em fontes oficiais atualizadas.</div></div></footer>
 </div>
}