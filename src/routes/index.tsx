import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileText, Globe2, MessageSquareText, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JobPass — Chegue preparado para trabalhar fora" },
      {
        name: "description",
        content:
          "Prepare currículo, mensagens, entrevista e plano de candidatura para o país onde você quer trabalhar.",
      },
      { property: "og:title", content: "JobPass — Seu kit de emprego internacional" },
      {
        property: "og:description",
        content:
          "Tudo o que você precisa para começar a se candidatar no novo país, em um só lugar.",
      },
    ],
  }),
  component: Index,
});

const essentials = [
  [FileText, "Currículo adaptado", "CV pronto para o país e uma versão otimizada para ATS."],
  [MessageSquareText, "Mensagens prontas", "WhatsApp, e-mail, LinkedIn e apresentação presencial."],
  [Search, "Plano para aplicar", "Vagas, termos de busca, entrevistas e próximos passos."],
];

const steps = [
  ["01", "Escolha o destino", "Diga para onde você vai e qual trabalho procura."],
  ["02", "Conte sua experiência", "Cole seu currículo, envie um arquivo ou comece do zero."],
  ["03", "Receba seu JobPass", "Seu pacote fica pronto para você revisar e liberar."],
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-forest font-bold text-paper">J</span>
      <div className="leading-none">
        <b className="text-lg tracking-tight">JobPass</b>
        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[.2em] text-warm-muted">
          Emprego internacional
        </p>
      </div>
    </Link>
  );
}

function Index() {
  return (
    <div className="min-h-dvh bg-ivory text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 text-sm text-warm-muted md:flex">
            <a href="#recebe" className="hover:text-ink">O que recebe</a>
            <a href="#como" className="hover:text-ink">Como funciona</a>
          </nav>
          <Button asChild className="rounded-full px-5">
            <Link to="/criar">Criar meu JobPass</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(125deg,#102e28_0%,#1c5145_58%,#70483b_100%)] text-paper">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,.11),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(220,173,128,.2),transparent_28%)]"
          />
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.95fr] lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-paper/80">
                <Globe2 className="size-3.5" />
                Para quem quer trabalhar em outro país
              </div>
              <h1 className="mt-6 max-w-[12ch] text-[2.8rem] font-semibold leading-[1.02] tracking-[-.05em] sm:text-6xl lg:text-[4.15rem]">
                Chegue preparado para procurar emprego.
              </h1>
              <p className="mt-6 max-w-[52ch] text-base leading-7 text-paper/75 sm:text-lg">
                Currículo, mensagens, entrevista e plano de candidatura adaptados ao país onde você quer trabalhar.
              </p>
              <Button asChild size="lg" className="mt-8 h-13 rounded-full bg-paper px-7 text-forest hover:bg-sand">
                <Link to="/criar">
                  Criar meu JobPass <ArrowRight />
                </Link>
              </Button>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-paper/65">
                <span>✓ Sem inventar experiência</span>
                <span>✓ Adaptado ao destino</span>
                <span>✓ Pronto para usar</span>
              </div>
            </div>
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-white/10 blur-2xl" />
              <img
                src="/jobpass-dashboard.svg"
                alt="Painel do JobPass com currículo, mensagens, entrevista e candidaturas"
                className="relative w-full rounded-[2rem] shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section id="recebe" className="scroll-mt-24 mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Em um só lugar</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">O essencial para começar.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {essentials.map(([Icon, title, description]: any) => (
              <article key={title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-forest/10">
                  <Icon className="size-5 text-forest" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-warm-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="como" className="scroll-mt-24 border-y border-ink/10 bg-paper">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Como funciona</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Três passos. Só isso.</h2>
              </div>
              <ol className="space-y-3">
                {steps.map(([number, title, description]) => (
                  <li
                    key={number}
                    className="grid grid-cols-[48px_1fr] gap-4 rounded-2xl border border-ink/10 bg-ivory p-5"
                  >
                    <span className="grid size-10 place-items-center rounded-full bg-forest text-xs font-semibold text-paper">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-warm-muted">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/jobpass-vacancy-adaptation.svg"
              alt="Exemplo do JobPass adaptando o material profissional a uma vaga"
              className="w-full rounded-3xl shadow-[var(--shadow-paper)]"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">Uma vaga de cada vez</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Cole a vaga. Ajuste o foco.
              </h2>
              <p className="mt-5 leading-7 text-warm-muted">
                O JobPass destaca o que realmente combina com a oportunidade e prepara currículo, carta e mensagem sem inventar experiência.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Resumo profissional", "Experiência relevante", "Carta e mensagem"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="size-5 shrink-0 text-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-forest-deep text-paper">
          <div className="mx-auto max-w-[900px] px-5 py-14 text-center sm:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Prepare tudo antes de começar a se candidatar.
            </h2>
            <Button asChild size="lg" className="mt-7 rounded-full bg-paper px-7 text-forest hover:bg-sand">
              <Link to="/criar">
                Criar meu JobPass <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b211c] text-paper">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Brand />
          <div className="max-w-xl text-xs leading-5 text-paper/50">
            <div className="mb-2 flex items-center gap-2 text-paper/70">
              <ShieldCheck className="size-4" /> Informação responsável
            </div>
            O JobPass prepara sua candidatura. Regras migratórias e direito ao trabalho devem ser confirmados em fontes oficiais.
          </div>
        </div>
      </footer>
    </div>
  );
}
