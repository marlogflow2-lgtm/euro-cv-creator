import { createFileRoute, Link } from "@tanstack/react-router";
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
    <div className="bg-paper border border-ink/10 shadow-[0_30px_60px_-30px_rgba(27,33,25,0.4)] rounded-sm">
      <div className="flex items-center justify-between px-5 py-3 border-b border-ink/10">
        <span className="font-serif text-sm">Pré-visualização</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-warm-muted">
          A4 · 1 página
        </span>
      </div>
      <div className="p-6">
        <div className="font-serif text-2xl leading-tight">{sampleCV.nome}</div>
        <div className="text-[12px] text-warm-muted mt-1">
          {sampleCV.titulo} · {sampleCV.cidade}
        </div>
        <div className="text-[11px] text-warm-muted mt-1">
          {sampleCV.email} · {sampleCV.telefone}
        </div>
        <div className="mt-4 pt-4 border-t border-ink/10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-forest mb-2">
            Perfil
          </div>
          <p className="text-[11px] leading-relaxed text-warm-muted">
            {sampleCV.perfil}
          </p>
        </div>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-forest mb-2">
            Experiência
          </div>
          {sampleCV.experiencias.map((e) => (
            <div key={e.cargo} className="text-[11px] font-medium mt-1 first:mt-0">
              {e.cargo} — {e.empresa}{" "}
              <span className="text-warm-muted font-normal">
                · {e.inicio}–{e.fim}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-ink font-sans">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-[1440px] px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-forest grid place-items-center">
              <span className="text-paper font-serif text-sm leading-none">P</span>
            </div>
            <div>
              <div className="font-serif text-lg leading-none tracking-tight">
                Passepartout
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-warm-muted mt-0.5">
                Currículo Europeu
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
            <a href="#como" className="text-warm-muted hover:text-ink">
              Como funciona
            </a>
            <a href="#europass" className="text-warm-muted hover:text-ink">
              Formato Europass
            </a>
          </nav>
          <Link
            to="/criar"
            className="text-[13px] font-medium text-paper bg-forest rounded-full px-4 py-2 hover:bg-forest-deep transition-colors"
          >
            Criar o meu CV
          </Link>
        </div>
      </header>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1440px] px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.22em] text-clay mb-5">
              Feito para o mercado de trabalho europeu
            </p>
            <h1 className="font-serif text-[54px] leading-[1.04] tracking-tight max-w-[16ch]">
              Um currículo que se lê como uma{" "}
              <span className="italic text-forest">carta bem guardada</span>.
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-warm-muted max-w-[52ch]">
              O Passepartout transforma a sua experiência num currículo europeu
              limpo e compatível com ATS — alinhado com o Europass e formatado
              segundo os padrões que os recrutadores em Berlim, Paris, Amesterdão
              e Lisboa esperam.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                to="/criar"
                className="text-[14px] font-medium text-paper bg-clay rounded-full px-6 py-3 hover:bg-clay-deep transition-colors"
              >
                Criar o meu currículo
              </Link>
              <Link
                to="/criar"
                search={{ exemplo: true }}
                className="text-[14px] font-medium text-ink border border-ink/20 rounded-full px-6 py-3 hover:bg-ink/5 transition-colors"
              >
                Ver um exemplo
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-6 text-[12px] text-warm-muted">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest" /> Sem marca
                de água
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest" /> Exportar
                em PDF (A4)
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest" /> Níveis de
                idiomas CEFR
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <MiniSheet />
          </div>
        </div>
      </section>

      <section id="europass" className="border-b border-ink/10">
        <div className="mx-auto max-w-[1440px] px-8 py-14">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl tracking-tight">
              Alinhado com o formato Europass
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((c) => (
              <div
                key={c.t}
                className="bg-paper border border-ink/10 rounded-sm p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-clay mb-2">
                  {c.t}
                </div>
                <p className="text-[13px] text-warm-muted leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como" className="border-b border-ink/10">
        <div className="mx-auto max-w-[1440px] px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="font-serif text-4xl text-clay/70 leading-none">
                {s.n}
              </span>
              <div>
                <div className="font-serif text-lg">{s.t}</div>
                <p className="text-[13px] text-warm-muted mt-1 leading-relaxed">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-forest-deep text-sand">
        <div className="mx-auto max-w-[1440px] px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[36ch]">
            <div className="font-serif text-xl text-paper">Passepartout</div>
            <p className="text-[13px] text-sand/70 mt-2 leading-relaxed">
              O curriculum vitae, formatado para a forma como a Europa realmente
              contrata.
            </p>
          </div>
          <Link
            to="/criar"
            className="text-[13px] font-medium text-forest-deep bg-sand rounded-full px-5 py-2.5 hover:bg-paper transition-colors"
          >
            Começar agora
          </Link>
        </div>
      </footer>
    </div>
  );
}
