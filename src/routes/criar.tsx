import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import {
  CEFR_LEVELS,
  emptyCV,
  sampleCV,
  type CVData,
} from "../lib/cv";

const searchSchema = z.object({
  exemplo: z.boolean().optional(),
});

export const Route = createFileRoute("/criar")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Editor — Passepartout · Currículo Europeu" },
      {
        name: "description",
        content:
          "Preencha os seus dados e veja o currículo europeu em formato A4 a atualizar em tempo real. Exporte em PDF.",
      },
      { property: "og:title", content: "Editor — Passepartout · Currículo Europeu" },
      {
        property: "og:description",
        content:
          "Preencha os seus dados e veja o currículo europeu em formato A4 a atualizar em tempo real. Exporte em PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditorPage,
});

const SECTIONS = [
  { id: "dados", label: "Dados pessoais" },
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "idiomas", label: "Idiomas" },
  { id: "competencias", label: "Competências" },
] as const;

const STORAGE_KEY = "passepartout-cv";

function loadInitial(withSample: boolean): CVData {
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as CVData;
    } catch {
      /* ignore */
    }
  }
  return withSample ? sampleCV : emptyCV;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium text-warm-muted mb-1">
        {label}
      </span>
      <input
        className="w-full h-9 rounded-sm bg-paper ring-1 ring-ink/10 px-3 text-sm outline-none focus:ring-2 focus:ring-forest/30 transition-shadow"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function CvSheet({ cv }: { cv: CVData }) {
  const has = (s: string) => s.trim().length > 0;
  return (
    <div
      id="cv-sheet"
      className="w-full max-w-[560px] aspect-[210/297] bg-paper ring-1 ring-ink/10 shadow-xl shadow-ink/10 rounded-sm p-8 print:aspect-auto"
    >
      <div className="flex items-start justify-between gap-4 border-b border-ink/15 pb-4">
        <div>
          <h1 className="font-serif text-[26px] font-medium tracking-tight leading-tight">
            {has(cv.nome) ? cv.nome : "O seu nome"}
          </h1>
          {has(cv.titulo) && (
            <p className="text-[13px] text-warm-muted mt-1">{cv.titulo}</p>
          )}
        </div>
        <div className="text-right text-[10.5px] leading-relaxed text-warm-muted shrink-0">
          {has(cv.email) && <p>{cv.email}</p>}
          {has(cv.telefone) && <p>{cv.telefone}</p>}
          {(has(cv.cidade) || has(cv.pais)) && (
            <p>{[cv.cidade, cv.pais].filter(has).join(" · ")}</p>
          )}
          {has(cv.linkedin) && <p>{cv.linkedin}</p>}
          {has(cv.nacionalidade) && <p>Nacionalidade: {cv.nacionalidade}</p>}
          {has(cv.dataNascimento) && <p>Nascimento: {cv.dataNascimento}</p>}
        </div>
      </div>

      {has(cv.perfil) && (
        <div className="mt-4">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest mb-1.5">
            Perfil profissional
          </p>
          <p className="text-[12px] leading-relaxed text-ink/80">{cv.perfil}</p>
        </div>
      )}

      {cv.experiencias.some((e) => has(e.cargo) || has(e.empresa)) && (
        <div className="mt-4">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest mb-2">
            Experiência profissional
          </p>
          <div className="space-y-3">
            {cv.experiencias
              .filter((e) => has(e.cargo) || has(e.empresa))
              .map((e, i) => (
                <div key={i}>
                  <p className="text-[12.5px] font-semibold">
                    {e.cargo}
                    {has(e.empresa) && ` · ${e.empresa}`}
                  </p>
                  <p className="text-[10.5px] text-warm-muted">
                    {[e.local, [e.inicio, e.fim].filter(has).join(" – ")]
                      .filter(has)
                      .join(" · ")}
                  </p>
                  {has(e.descricao) && (
                    <p className="text-[11.5px] text-ink/75 leading-relaxed mt-0.5">
                      {e.descricao}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {cv.formacao.some((f) => has(f.curso) || has(f.instituicao)) && (
        <div className="mt-4">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest mb-2">
            Formação académica
          </p>
          <div className="space-y-2">
            {cv.formacao
              .filter((f) => has(f.curso) || has(f.instituicao))
              .map((f, i) => (
                <div key={i}>
                  <p className="text-[12.5px] font-semibold">{f.curso}</p>
                  <p className="text-[10.5px] text-warm-muted">
                    {[f.instituicao, f.local, f.ano].filter(has).join(" · ")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-x-6">
        {cv.idiomas.some((l) => has(l.idioma)) && (
          <div>
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest mb-2">
              Idiomas
            </p>
            <div className="space-y-1">
              {cv.idiomas
                .filter((l) => has(l.idioma))
                .map((l, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-[11.5px]"
                  >
                    <span>{l.idioma}</span>
                    <span className="text-[10px] font-medium text-clay">
                      {l.nivel}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
        {cv.competencias.length > 0 && (
          <div>
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest mb-2">
              Competências
            </p>
            <div className="flex flex-wrap gap-1">
              {cv.competencias.map((c, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded-sm bg-sand/70 text-[10px] font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-warm-muted/70 border-t border-ink/10 print:hidden" />
    </div>
  );
}

function EditorPage() {
  const { exemplo } = Route.useSearch();
  const [cv, setCv] = useState<CVData>(() => loadInitial(!!exemplo));
  const [section, setSection] = useState(0);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
    } catch {
      /* ignore */
    }
  }, [cv]);

  const set = <K extends keyof CVData>(key: K, value: CVData[K]) =>
    setCv((c) => ({ ...c, [key]: value }));

  const progress = Math.round(((section + 1) / SECTIONS.length) * 100);

  const sectionBody = useMemo(() => {
    switch (SECTIONS[section]!.id) {
      case "dados":
        return (
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <Field
                label="Nome completo"
                value={cv.nome}
                onChange={(v) => set("nome", v)}
                placeholder="Maria Silva"
              />
            </div>
            <div className="col-span-2">
              <Field
                label="Título profissional"
                value={cv.titulo}
                onChange={(v) => set("titulo", v)}
                placeholder="Engenheira de Software"
              />
            </div>
            <Field
              label="Cidade"
              value={cv.cidade}
              onChange={(v) => set("cidade", v)}
              placeholder="Lisboa"
            />
            <Field
              label="País"
              value={cv.pais}
              onChange={(v) => set("pais", v)}
              placeholder="Portugal"
            />
            <Field
              label="Email"
              value={cv.email}
              onChange={(v) => set("email", v)}
              placeholder="maria@exemplo.pt"
            />
            <Field
              label="Telefone"
              value={cv.telefone}
              onChange={(v) => set("telefone", v)}
              placeholder="+351 912 345 678"
            />
            <Field
              label="LinkedIn / website"
              value={cv.linkedin}
              onChange={(v) => set("linkedin", v)}
            />
            <Field
              label="Nacionalidade"
              value={cv.nacionalidade}
              onChange={(v) => set("nacionalidade", v)}
              placeholder="Portuguesa"
            />
            <Field
              label="Data de nascimento"
              value={cv.dataNascimento}
              onChange={(v) => set("dataNascimento", v)}
              placeholder="12/04/1992"
            />
          </div>
        );
      case "perfil":
        return (
          <label className="block">
            <span className="block text-[11px] font-medium text-warm-muted mb-1">
              Resumo profissional (3–4 frases)
            </span>
            <textarea
              rows={6}
              className="w-full rounded-sm bg-paper ring-1 ring-ink/10 px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-forest/30 transition-shadow"
              value={cv.perfil}
              placeholder="Profissional com X anos de experiência em…"
              onChange={(e) => set("perfil", e.target.value)}
            />
          </label>
        );
      case "experiencia":
        return (
          <div className="space-y-4">
            {cv.experiencias.map((e, i) => (
              <div
                key={i}
                className="rounded-sm ring-1 ring-ink/10 bg-paper/60 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-warm-muted">
                    Cargo {String(i + 1).padStart(2, "0")}
                  </span>
                  {cv.experiencias.length > 1 && (
                    <button
                      className="text-[11px] text-clay hover:text-clay-deep"
                      onClick={() =>
                        set(
                          "experiencias",
                          cv.experiencias.filter((_, j) => j !== i),
                        )
                      }
                    >
                      Remover
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <Field
                      label="Cargo"
                      value={e.cargo}
                      onChange={(v) =>
                        set(
                          "experiencias",
                          cv.experiencias.map((x, j) =>
                            j === i ? { ...x, cargo: v } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <Field
                    label="Empresa"
                    value={e.empresa}
                    onChange={(v) =>
                      set(
                        "experiencias",
                        cv.experiencias.map((x, j) =>
                          j === i ? { ...x, empresa: v } : x,
                        ),
                      )
                    }
                  />
                  <Field
                    label="Local"
                    value={e.local}
                    onChange={(v) =>
                      set(
                        "experiencias",
                        cv.experiencias.map((x, j) =>
                          j === i ? { ...x, local: v } : x,
                        ),
                      )
                    }
                  />
                  <Field
                    label="Início"
                    value={e.inicio}
                    placeholder="Mar 2021"
                    onChange={(v) =>
                      set(
                        "experiencias",
                        cv.experiencias.map((x, j) =>
                          j === i ? { ...x, inicio: v } : x,
                        ),
                      )
                    }
                  />
                  <Field
                    label="Fim"
                    value={e.fim}
                    placeholder="Atual"
                    onChange={(v) =>
                      set(
                        "experiencias",
                        cv.experiencias.map((x, j) =>
                          j === i ? { ...x, fim: v } : x,
                        ),
                      )
                    }
                  />
                  <div className="col-span-2">
                    <label className="block">
                      <span className="block text-[11px] font-medium text-warm-muted mb-1">
                        Descrição
                      </span>
                      <textarea
                        rows={3}
                        className="w-full rounded-sm bg-paper ring-1 ring-ink/10 px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-forest/30"
                        value={e.descricao}
                        onChange={(ev) =>
                          set(
                            "experiencias",
                            cv.experiencias.map((x, j) =>
                              j === i ? { ...x, descricao: ev.target.value } : x,
                            ),
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="w-full h-10 rounded-sm ring-1 ring-forest/25 text-sm font-medium text-forest hover:bg-forest/5 transition-colors"
              onClick={() =>
                set("experiencias", [
                  ...cv.experiencias,
                  {
                    cargo: "",
                    empresa: "",
                    local: "",
                    inicio: "",
                    fim: "",
                    descricao: "",
                  },
                ])
              }
            >
              + Adicionar experiência
            </button>
          </div>
        );
      case "formacao":
        return (
          <div className="space-y-4">
            {cv.formacao.map((f, i) => (
              <div
                key={i}
                className="rounded-sm ring-1 ring-ink/10 bg-paper/60 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-warm-muted">
                    Formação {String(i + 1).padStart(2, "0")}
                  </span>
                  {cv.formacao.length > 1 && (
                    <button
                      className="text-[11px] text-clay hover:text-clay-deep"
                      onClick={() =>
                        set(
                          "formacao",
                          cv.formacao.filter((_, j) => j !== i),
                        )
                      }
                    >
                      Remover
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <Field
                      label="Curso / qualificação"
                      value={f.curso}
                      onChange={(v) =>
                        set(
                          "formacao",
                          cv.formacao.map((x, j) =>
                            j === i ? { ...x, curso: v } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <Field
                    label="Instituição"
                    value={f.instituicao}
                    onChange={(v) =>
                      set(
                        "formacao",
                        cv.formacao.map((x, j) =>
                          j === i ? { ...x, instituicao: v } : x,
                        ),
                      )
                    }
                  />
                  <Field
                    label="Local"
                    value={f.local}
                    onChange={(v) =>
                      set(
                        "formacao",
                        cv.formacao.map((x, j) =>
                          j === i ? { ...x, local: v } : x,
                        ),
                      )
                    }
                  />
                  <Field
                    label="Ano de conclusão"
                    value={f.ano}
                    placeholder="2014"
                    onChange={(v) =>
                      set(
                        "formacao",
                        cv.formacao.map((x, j) =>
                          j === i ? { ...x, ano: v } : x,
                        ),
                      )
                    }
                  />
                </div>
              </div>
            ))}
            <button
              className="w-full h-10 rounded-sm ring-1 ring-forest/25 text-sm font-medium text-forest hover:bg-forest/5 transition-colors"
              onClick={() =>
                set("formacao", [
                  ...cv.formacao,
                  { curso: "", instituicao: "", local: "", ano: "" },
                ])
              }
            >
              + Adicionar formação
            </button>
          </div>
        );
      case "idiomas":
        return (
          <div className="space-y-3">
            <p className="text-[12px] text-warm-muted leading-relaxed">
              Níveis do Quadro Europeu Comum de Referência (CEFR): A1–A2
              básico, B1–B2 independente, C1–C2 proficiente.
            </p>
            {cv.idiomas.map((l, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1">
                  <Field
                    label="Idioma"
                    value={l.idioma}
                    placeholder="Inglês"
                    onChange={(v) =>
                      set(
                        "idiomas",
                        cv.idiomas.map((x, j) =>
                          j === i ? { ...x, idioma: v } : x,
                        ),
                      )
                    }
                  />
                </div>
                <label className="block">
                  <span className="block text-[11px] font-medium text-warm-muted mb-1">
                    Nível
                  </span>
                  <select
                    className="h-9 rounded-sm bg-paper ring-1 ring-ink/10 px-2 text-sm outline-none focus:ring-2 focus:ring-forest/30"
                    value={l.nivel}
                    onChange={(e) =>
                      set(
                        "idiomas",
                        cv.idiomas.map((x, j) =>
                          j === i ? { ...x, nivel: e.target.value } : x,
                        ),
                      )
                    }
                  >
                    {CEFR_LEVELS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
                {cv.idiomas.length > 1 && (
                  <button
                    className="h-9 px-2 text-[11px] text-clay hover:text-clay-deep"
                    onClick={() =>
                      set(
                        "idiomas",
                        cv.idiomas.filter((_, j) => j !== i),
                      )
                    }
                  >
                    Remover
                  </button>
                )}
              </div>
            ))}
            <button
              className="w-full h-10 rounded-sm ring-1 ring-forest/25 text-sm font-medium text-forest hover:bg-forest/5 transition-colors"
              onClick={() =>
                set("idiomas", [...cv.idiomas, { idioma: "", nivel: "B1" }])
              }
            >
              + Adicionar idioma
            </button>
          </div>
        );
      case "competencias":
        return (
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                className="flex-1 h-9 rounded-sm bg-paper ring-1 ring-ink/10 px-3 text-sm outline-none focus:ring-2 focus:ring-forest/30"
                value={skill}
                placeholder="Ex.: Gestão de projetos"
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && skill.trim()) {
                    set("competencias", [...cv.competencias, skill.trim()]);
                    setSkill("");
                  }
                }}
              />
              <button
                className="h-9 px-4 rounded-sm bg-forest text-paper text-sm font-medium hover:bg-forest-deep transition-colors"
                onClick={() => {
                  if (skill.trim()) {
                    set("competencias", [...cv.competencias, skill.trim()]);
                    setSkill("");
                  }
                }}
              >
                Adicionar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {cv.competencias.map((c, i) => (
                <button
                  key={i}
                  className="px-2.5 py-1 rounded-sm bg-sand/70 text-[12px] font-medium hover:bg-clay/20 transition-colors"
                  title="Remover"
                  onClick={() =>
                    set(
                      "competencias",
                      cv.competencias.filter((_, j) => j !== i),
                    )
                  }
                >
                  {c} ×
                </button>
              ))}
            </div>
          </div>
        );
    }
  }, [cv, section, skill]);

  return (
    <div className="h-screen w-full bg-ivory text-ink font-sans flex flex-col overflow-hidden">
      <header className="h-16 shrink-0 border-b border-ink/10 bg-paper/70 backdrop-blur flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="size-8 rounded-full bg-forest grid place-items-center text-paper font-serif text-sm leading-none">
            P
          </span>
          <div className="leading-tight">
            <p className="font-serif text-[15px] tracking-tight">Passepartout</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-warm-muted">
              Editor de CV europeu
            </p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-[12.5px]">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSection(i)}
              className={`px-2.5 py-1 rounded-sm transition-colors ${
                i === section
                  ? "bg-forest/10 text-forest font-medium"
                  : "text-warm-muted hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-[11px] font-medium text-warm-muted tabular-nums">
            {section + 1} de {SECTIONS.length} · {progress}%
          </span>
          <button
            onClick={() => window.print()}
            className="h-9 rounded-full bg-clay px-4 text-sm font-medium text-paper hover:bg-clay-deep transition-colors"
          >
            Exportar PDF
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-full lg:w-[46%] lg:max-w-[640px] shrink-0 overflow-y-auto border-r border-ink/10 bg-paper/50 px-8 py-7 print:hidden">
          <div className="mb-6">
            <div className="h-1 w-full rounded-full bg-ink/10 overflow-hidden mb-4">
              <div
                className="h-full rounded-full bg-forest transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h2 className="font-serif text-2xl tracking-tight">
              {SECTIONS[section]!.label}
            </h2>
          </div>

          {sectionBody}

          <div className="mt-8 flex items-center justify-between">
            <button
              disabled={section === 0}
              onClick={() => setSection((s) => Math.max(0, s - 1))}
              className="px-4 h-10 rounded-full border border-ink/20 text-sm font-medium text-ink disabled:opacity-40 hover:bg-ink/5 transition-colors"
            >
              Anterior
            </button>
            <div className="flex gap-1.5">
              {SECTIONS.map((s, i) => (
                <span
                  key={s.id}
                  className={`w-6 h-1 rounded-full ${
                    i === section ? "bg-clay" : i < section ? "bg-forest" : "bg-ink/15"
                  }`}
                />
              ))}
            </div>
            {section < SECTIONS.length - 1 ? (
              <button
                onClick={() =>
                  setSection((s) => Math.min(SECTIONS.length - 1, s + 1))
                }
                className="px-4 h-10 rounded-full bg-forest text-paper text-sm font-medium hover:bg-forest-deep transition-colors"
              >
                Seguinte
              </button>
            ) : (
              <button
                onClick={() => window.print()}
                className="px-4 h-10 rounded-full bg-clay text-paper text-sm font-medium hover:bg-clay-deep transition-colors"
              >
                Exportar PDF
              </button>
            )}
          </div>
        </aside>

        <main className="hidden lg:flex flex-1 overflow-y-auto px-8 py-8 items-start justify-center">
          <CvSheet cv={cv} />
        </main>
      </div>

      {/* Mobile-only preview at the end */}
      <div className="lg:hidden print:block px-6 pb-10">
        <CvSheet cv={cv} />
      </div>
    </div>
  );
}
