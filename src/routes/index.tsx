import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleCV } from "../lib/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Passepartout — Criador de Currículo Europeu" },
      {
        name: "description",
        content:
          "Transforme a sua experiência num currículo europeu limpo e compatível com ATS, alinhado com o Europass e pronto a exportar em PDF.",
      },
      { property: "og:title", content: "Passepartout — Criador de Currículo Europeu" },
      {
        property: "og:description",
        content:
          "Transforme a sua experiência num currículo europeu limpo e compatível com ATS, alinhado com o Europass e pronto a exportar em PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function MiniSheet() {
  return (
    <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto" aria-label="Pré-visualização de currículo">
      <div aria-hidden="true" className="absolute inset-5 translate-x-3 translate-y-4 rotate-[1.5deg] rounded-sm border border-ink/10 bg-sand/55" />
      <div aria-hidden="true" className="absolute inset-3 -translate-x-2 translate-y-2 -rotate-[1deg] rounded-sm border border-ink/10 bg-paper/70" />
      <div className="relative rounded-sm border border-ink/15 bg-paper shadow-[var(--shadow-paper)]">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5 sm:px-7">
          <span className="font-serif text-sm">Pré-visualização</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-warm-muted">
            A4 · 1 página
          </span>
        </div>
        <div className="p-6 sm:p-8 lg:p-9">
          <div className="font-serif text-3xl leading-tight sm:text-4xl">{sampleCV.nome}</div>
          <div className="mt-2 text-[12px] text-warm-muted">
            {sampleCV.titulo} · {sampleCV.cidade}
          </div>
          <div className="mt-1 text-[11px] text-warm-muted">
            {sampleCV.email} · {sampleCV.telefone}
          </div>
          <div className="mt-6 border-t border-ink/10 pt-5">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-forest">
              Perfil
            </div>
            <p className="text-[11px] leading-relaxed text-warm-muted">{sampleCV.perfil}</p>
          </div>
          <div className="mt-5 border-t border-ink/10 pt-5">
            <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-forest">
              Experiência
            </div>
            <div className="space-y-3">
              {sampleCV.experiencias.map((experience) => (
                <div key={experience.cargo} className="grid grid-cols-[1fr_auto] gap-3 text-[11px]">
                  <span className="font-medium">
                    {experience.cargo} — {experience.empresa}
                  </span>
                  <span className="text-warm-muted">
                    {experience.inicio}–{experience.fim}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    t: "Dados pessoais",
    d: "Nacionalidade, data de nascimento e contactos, como os recrutadores europeus esperam.",
  },
  {
    t: "Experiência e formação",
    d: "Cronologia inversa com períodos claros, entidade e descrição das principais responsabilidades.",
  },
  {
    t: "Idiomas com níveis CEFR",
    d: "Português, inglês, alemão… classificados de A1 a C2 segundo o Quadro Europeu Comum de Referência.",
  },
];

const steps = [
  {
    n: "01",
    t: "Preencha o seu percurso",
    d: "Introduza dados pessoais, experiência, formação e idiomas num formulário guiado por secções.",
  },
  {
    n: "02",
    t: "Veja o CV a ganhar forma",
    d: "A folha A4 ao lado atualiza em tempo real, no formato europeu, à medida que escreve.",
  },
  {
    n: "03",
    t: "Exporte e candidate-se",
    d: "Descarregue um PDF impecável de uma página, pronto para enviar ao recrutador.",
  },
];

const focusStyles = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-ivory";

function Index() {
  return (
    <div className="min-h-dvh bg-ivory font-sans text-ink selection:bg-sand">
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" aria-label="Passepartout — página inicial" className={`flex items-center gap-3 rounded-sm ${focusStyles}`}>
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-forest">
              <span className="font-serif text-sm leading-none text-paper">P</span>
            </div>
            <div>
              <div className="font-serif text-xl leading-none">Passepartout</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-warm-muted">Currículo Europeu</div>
            </div>
          </Link>
          <nav aria-label="Navegação principal" className="hidden items-center gap-10 text-[12px] font-medium uppercase tracking-[0.12em] lg:flex">
            <a href="#como" className={`rounded-sm text-warm-muted transition-colors hover:text-ink ${focusStyles}`}>Como funciona</a>
            <a href="#europass" className={`rounded-sm text-warm-muted transition-colors hover:text-ink ${focusStyles}`}>Formato Europass</a>
          </nav>
          <Button asChild className="h-11 rounded-sm px-4 shadow-none sm:px-5">
            <Link to="/criar">Criar o meu CV</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-ink/10 bg-[linear-gradient(115deg,#392684_0%,#2760ae_48%,#a94491_100%)] text-paper">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(255,255,255,.2),transparent_24%),radial-gradient(circle_at_8%_90%,rgba(255,255,255,.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
            <div className="lg:col-span-7 lg:pr-4">
              <div className="mb-7 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-white/70" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Feito para o mercado de trabalho europeu</p>
              </div>
              <h1 className="max-w-[15ch] font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Um currículo que se lê como uma <span className="italic text-white">carta bem guardada</span>.
              </h1>
              <p className="mt-7 max-w-[56ch] text-base leading-7 text-white/85 sm:text-[17px]">
                O Passepartout transforma a sua experiência num currículo europeu limpo e compatível com ATS — alinhado com o Europass e formatado segundo os padrões que os recrutadores em Berlim, Paris, Amesterdão e Lisboa esperam.
              </p>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 rounded-sm bg-white px-6 text-[#342574] shadow-none hover:bg-sand">
                  <Link to="/criar">
                    Criar o meu currículo
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-sm border-white/70 bg-transparent px-6 text-white shadow-none hover:bg-white/15">
                  <Link to="/criar" search={{ exemplo: true }}>Ver um exemplo</Link>
                </Button>
              </div>
              <ul className="mt-9 grid gap-3 border-t border-white/25 pt-6 text-[12px] text-white/80 sm:grid-cols-3 sm:gap-5">
                {["Sem marca de água", "Exportar em PDF (A4)", "Níveis de idiomas CEFR"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5"><MiniSheet /></div>
          </div>
        </section>

        <section id="europass" className="scroll-mt-6 border-b border-ink/10 bg-paper/35">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mb-10 grid gap-3 border-b border-ink/15 pb-7 md:grid-cols-[1fr_auto] md:items-end">
              <h2 className="max-w-[18ch] font-serif text-4xl leading-tight sm:text-5xl">Alinhado com o formato Europass</h2>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">Padrão europeu</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <article key={benefit.t} className="border-b border-ink/10 py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
                  <span className="mb-8 block font-serif text-3xl text-clay/70">0{index + 1}</span>
                  <h3 className="font-serif text-2xl">{benefit.t}</h3>
                  <p className="mt-3 max-w-[34ch] text-[14px] leading-6 text-warm-muted">{benefit.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como" className="scroll-mt-6 border-b border-ink/10">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-7">
              <h2 className="font-serif text-4xl sm:text-5xl">Como funciona</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.n} className="relative border-b border-ink/10 py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
                  <span className="mb-8 block text-[11px] font-semibold tracking-[0.2em] text-clay">{step.n}</span>
                  <h3 className="max-w-[18ch] font-serif text-2xl leading-snug">{step.t}</h3>
                  <p className="mt-3 max-w-[35ch] text-[14px] leading-6 text-warm-muted">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="bg-forest-deep text-sand">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div className="max-w-[38ch]">
            <div className="font-serif text-2xl text-paper">Passepartout</div>
            <p className="mt-2 text-[13px] leading-relaxed text-sand/80">O curriculum vitae, formatado para a forma como a Europa realmente contrata.</p>
          </div>
          <Button asChild variant="secondary" className="h-11 rounded-sm px-5 shadow-none">
            <Link to="/criar">Começar agora</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
