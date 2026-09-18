import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  FileText,
  Globe2,
  Languages,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JobPass — International job preparation" },
      {
        name: "description",
        content:
          "Prepare your CV, messages, interview and job-search plan for the country where you want to work.",
      },
      {
        property: "og:title",
        content: "JobPass — Your international job kit",
      },
      {
        property: "og:description",
        content:
          "Everything you need to start applying in your new country, in one place.",
      },
    ],
  }),
  component: Index,
});

type Lang = "pt" | "es" | "en" | "fr" | "de" | "it";

const copy = {
  pt: {
    nav: ["O que você recebe", "Como funciona", "Dúvidas"],
    brand: "Emprego internacional",
    cta: "Criar meu JobPass",
    proof: "+8 mil imigrantes conseguiram emprego no exterior com nossas estratégias",
    eyebrow: "Para quem quer trabalhar em outro país",
    hero: "Consiga sua vaga em qualquer país antes mesmo de viajar.",
    heroSub:
      "Comece com o caminho certo para se candidatar às vagas do seu interesse. A JobPass te fornece o kit perfeito, com estratégias usadas por imigrantes de todo o mundo, para encontrar as oportunidades certas e se aproximar do seu sonho de viver fora do país.",
    heroCta: "Montar meu JobPass",
    minutes: "Leva poucos minutos para começar",
    trust: ["Sem inventar experiência", "Adaptado ao destino", "Pronto para usar"],
    reviewsTitle: "Quem já usou nossas estratégias",
    deliverEyebrow: "Seu pacote profissional",
    deliverTitle: "Não é só um currículo.",
    deliverSub:
      "Você recebe as peças que normalmente teria que criar, traduzir e adaptar separadamente.",
    deliver: [
      ["Currículo adaptado", "Um CV profissional ajustado ao padrão do país de destino."],
      ["Versão ATS", "Estrutura limpa para sistemas de recrutamento, sem inventar informações."],
      ["Idioma local", "Seu material preparado para o idioma usado nas candidaturas."],
      ["Mensagens prontas", "WhatsApp, e-mail, LinkedIn, telefone e apresentação presencial."],
      ["Adaptação por vaga", "Cole uma vaga e direcione seu material aos requisitos que você realmente possui."],
      ["Plano de 7 dias", "Portais, termos de busca e uma rotina prática para começar a aplicar."],
    ],
    howEyebrow: "Como funciona",
    howTitle: "Do zero ao material pronto em três etapas.",
    howSub:
      "Você informa os fatos. O JobPass organiza sua candidatura ao redor do mercado que escolheu.",
    steps: [
      ["Escolha seu destino", "Informe de onde você vem, para onde vai e em qual área quer trabalhar."],
      ["Conte sua experiência", "Cole seu currículo, envie o arquivo ou comece do zero. Você não precisa escrever bonito."],
      ["Receba seu JobPass", "Abra seu painel com CV, mensagens, entrevista, busca de vagas e plano de candidatura."],
    ],
    vacancyEyebrow: "Aplicar para uma vaga",
    vacancyTitle: "Pare de mandar o mesmo CV para todo mundo.",
    vacancySub:
      "Cole a descrição da vaga. O JobPass identifica o que pode ser destacado usando somente experiências e competências que você realmente informou.",
    vacancyCards: ["Resumo", "Experiência", "Carta", "Mensagem"],
    integrity:
      "A lógica é sempre a mesma: adaptar o foco sem criar empresas, resultados, qualificações ou habilidades que não existem no seu histórico.",
    faqEyebrow: "Antes de começar",
    faqTitle: "Perguntas frequentes",
    faq: [
      ["O JobPass consegue emprego para mim?", "Não. O JobPass prepara seu material e sua estratégia de candidatura. A contratação depende das empresas e do seu processo seletivo."],
      ["A ferramenta inventa experiência para melhorar meu currículo?", "Não. O JobPass organiza e profissionaliza somente as informações que você fornecer."],
      ["Funciona para quem ainda está no Brasil?", "Sim. Você pode preparar seu material antes da mudança e começar a mapear vagas e termos usados no destino."],
      ["Quais países estarão disponíveis?", "A estrutura é internacional. A primeira versão será aprofundada para Espanha e Portugal e, depois, expandida para outros destinos."],
    ],
    finalTitle:
      "Sua mudança já tem coisas demais para resolver. A candidatura não precisa começar do zero.",
    finalCta: "Montar meu JobPass",
    responsible: "Informação responsável",
    footer:
      "JobPass é uma ferramenta de preparação profissional. Informações migratórias, legais e de direito ao trabalho devem ser confirmadas em fontes oficiais atualizadas.",
  },
  es: {
    nav: ["Qué recibes", "Cómo funciona", "Preguntas"],
    brand: "Empleo internacional",
    cta: "Crear mi JobPass",
    proof: "+8 mil inmigrantes consiguieron empleo en el extranjero con nuestras estrategias",
    eyebrow: "Para quienes quieren trabajar en otro país",
    hero: "Consigue tu empleo en cualquier país incluso antes de viajar.",
    heroSub:
      "Empieza por el camino correcto para postularte a las vacantes que te interesan. JobPass te ofrece el kit ideal, con estrategias utilizadas por inmigrantes de todo el mundo, para encontrar las oportunidades adecuadas y acercarte al sueño de vivir en otro país.",
    heroCta: "Crear mi JobPass",
    minutes: "Solo toma unos minutos empezar",
    trust: ["Sin inventar experiencia", "Adaptado al destino", "Listo para usar"],
    reviewsTitle: "Personas que ya usaron nuestras estrategias",
    deliverEyebrow: "Tu paquete profesional",
    deliverTitle: "No es solo un currículum.",
    deliverSub:
      "Recibes las piezas que normalmente tendrías que crear, traducir y adaptar por separado.",
    deliver: [
      ["Currículum adaptado", "Un CV profesional ajustado al estándar del país de destino."],
      ["Versión ATS", "Estructura limpia para sistemas de selección, sin inventar información."],
      ["Idioma local", "Tu material preparado para el idioma usado en las candidaturas."],
      ["Mensajes listos", "WhatsApp, email, LinkedIn, teléfono y presentación presencial."],
      ["Adaptación por vacante", "Pega una oferta y orienta tu material a requisitos que realmente tienes."],
      ["Plan de 7 días", "Portales, búsquedas y una rutina práctica para empezar a postular."],
    ],
    howEyebrow: "Cómo funciona",
    howTitle: "De cero al material listo en tres pasos.",
    howSub:
      "Tú aportas los datos. JobPass organiza tu candidatura alrededor del mercado elegido.",
    steps: [
      ["Elige tu destino", "Indica de dónde vienes, adónde vas y en qué área quieres trabajar."],
      ["Cuéntanos tu experiencia", "Pega tu CV, sube el archivo o empieza desde cero. No necesitas escribir perfecto."],
      ["Recibe tu JobPass", "Abre tu panel con CV, mensajes, entrevista, búsqueda de empleo y plan de candidatura."],
    ],
    vacancyEyebrow: "Postular a una vacante",
    vacancyTitle: "Deja de enviar el mismo CV a todo el mundo.",
    vacancySub:
      "Pega la descripción de la vacante. JobPass identifica qué destacar usando solo experiencias y competencias que realmente indicaste.",
    vacancyCards: ["Resumen", "Experiencia", "Carta", "Mensaje"],
    integrity:
      "La regla es simple: adaptar el enfoque sin crear empresas, resultados, cualificaciones o habilidades que no existen en tu historial.",
    faqEyebrow: "Antes de empezar",
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿JobPass me consigue empleo?", "No. JobPass prepara tu material y estrategia de candidatura. La contratación depende de las empresas y del proceso de selección."],
      ["¿La herramienta inventa experiencia para mejorar mi CV?", "No. JobPass organiza y profesionaliza únicamente la información que proporciones."],
      ["¿Funciona si todavía estoy en mi país?", "Sí. Puedes preparar tu material antes de mudarte y empezar a mapear vacantes y términos de búsqueda."],
      ["¿Qué países estarán disponibles?", "La estructura es internacional. La primera versión profundiza España y Portugal y luego se expandirá a otros destinos."],
    ],
    finalTitle:
      "Tu mudanza ya tiene demasiadas cosas que resolver. Tu candidatura no tiene que empezar de cero.",
    finalCta: "Crear mi JobPass",
    responsible: "Información responsable",
    footer:
      "JobPass es una herramienta de preparación profesional. La información migratoria, legal y sobre derecho al trabajo debe confirmarse en fuentes oficiales actualizadas.",
  },
  en: {
    nav: ["What you get", "How it works", "Questions"],
    brand: "International employment",
    cta: "Create my JobPass",
    proof: "+8,000 immigrants landed jobs abroad using our strategies",
    eyebrow: "For people who want to work in another country",
    hero: "Land your job in any country before you even travel.",
    heroSub:
      "O caminho certo para se candidatar às vagas do seu interesse fora do seu país. Estratégias usadas por imigrantes de todo o mundo, para encontrar as oportunidades certas, se conectar com empresas do mundo todo e se aproximar do seu sonho de viver fora do país.",
    heroCta: "Build my JobPass",
    minutes: "It only takes a few minutes to start",
    trust: ["No made-up experience", "Adapted to your destination", "Ready to use"],
    reviewsTitle: "People who already used our strategies",
    deliverEyebrow: "Your professional kit",
    deliverTitle: "It is more than a CV.",
    deliverSub:
      "You get the pieces you would normally have to create, translate and adapt separately.",
    deliver: [
      ["Adapted CV", "A professional CV adjusted to the standards of your destination country."],
      ["ATS version", "A clean structure for recruitment systems, without invented information."],
      ["Local language", "Your material prepared for the language used in applications."],
      ["Ready-to-send messages", "WhatsApp, email, LinkedIn, phone and in-person introduction."],
      ["Vacancy adaptation", "Paste a job and focus your material on requirements you actually have."],
      ["7-day plan", "Job boards, search terms and a practical routine to start applying."],
    ],
    howEyebrow: "How it works",
    howTitle: "From zero to ready-to-use material in three steps.",
    howSub:
      "You provide the facts. JobPass organizes your application around the market you chose.",
    steps: [
      ["Choose your destination", "Tell us where you are from, where you are going and the field you want to work in."],
      ["Share your experience", "Paste your CV, upload it or start from scratch. You do not need perfect wording."],
      ["Receive your JobPass", "Open your dashboard with CV, messages, interview prep, job search and application plan."],
    ],
    vacancyEyebrow: "Apply to a vacancy",
    vacancyTitle: "Stop sending the same CV to everyone.",
    vacancySub:
      "Paste the job description. JobPass identifies what can be highlighted using only experience and skills you actually provided.",
    vacancyCards: ["Summary", "Experience", "Cover letter", "Message"],
    integrity:
      "The rule is simple: change the focus without inventing companies, results, qualifications or skills that are not in your history.",
    faqEyebrow: "Before you start",
    faqTitle: "Frequently asked questions",
    faq: [
      ["Does JobPass get me a job?", "No. JobPass prepares your materials and application strategy. Hiring decisions depend on employers and their selection process."],
      ["Does it invent experience to improve my CV?", "No. JobPass only organizes and professionalizes the information you provide."],
      ["Can I use it before I move?", "Yes. You can prepare your materials before relocating and start mapping jobs and search terms in advance."],
      ["Which countries are available?", "The architecture is international. Spain and Portugal are the first deeply supported markets, followed by more destinations."],
    ],
    finalTitle:
      "Moving countries already gives you enough to solve. Your job application should not start from zero.",
    finalCta: "Build my JobPass",
    responsible: "Responsible information",
    footer:
      "JobPass is a professional preparation tool. Immigration, legal and right-to-work information should always be confirmed with current official sources.",
  },
  fr: {
    nav: ["Ce que vous recevez", "Comment ça marche", "Questions"],
    brand: "Emploi international",
    cta: "Créer mon JobPass",
    proof: "+8 000 immigrés ont trouvé un emploi à l'étranger grâce à nos stratégies",
    eyebrow: "Pour ceux qui veulent travailler dans un autre pays",
    hero: "Décrochez votre emploi dans n'importe quel pays avant même de voyager.",
    heroSub:
      "Commencez par la bonne voie pour postuler aux offres qui vous intéressent. JobPass vous fournit le kit idéal, avec des stratégies utilisées par des immigrés du monde entier, pour trouver les bonnes opportunités et vous rapprocher de votre projet de vivre à l'étranger.",
    heroCta: "Créer mon JobPass",
    minutes: "Quelques minutes suffisent pour commencer",
    trust: ["Aucune expérience inventée", "Adapté à la destination", "Prêt à utiliser"],
    reviewsTitle: "Ils ont déjà utilisé nos stratégies",
    deliverEyebrow: "Votre kit professionnel",
    deliverTitle: "Ce n'est pas seulement un CV.",
    deliverSub:
      "Vous recevez les éléments que vous devriez normalement créer, traduire et adapter séparément.",
    deliver: [
      ["CV adapté", "Un CV professionnel adapté aux standards du pays de destination."],
      ["Version ATS", "Une structure claire pour les systèmes de recrutement, sans informations inventées."],
      ["Langue locale", "Vos documents préparés dans la langue utilisée pour les candidatures."],
      ["Messages prêts", "WhatsApp, e-mail, LinkedIn, téléphone et présentation en personne."],
      ["Adaptation à l'offre", "Collez une offre et adaptez votre dossier aux exigences que vous possédez réellement."],
      ["Plan de 7 jours", "Sites d'emploi, mots-clés et routine pratique pour commencer à postuler."],
    ],
    howEyebrow: "Comment ça marche",
    howTitle: "De zéro à un dossier prêt en trois étapes.",
    howSub:
      "Vous fournissez les faits. JobPass organise votre candidature autour du marché choisi.",
    steps: [
      ["Choisissez votre destination", "Indiquez votre pays d'origine, votre destination et le secteur visé."],
      ["Partagez votre expérience", "Collez votre CV, importez-le ou commencez de zéro. Pas besoin de rédiger parfaitement."],
      ["Recevez votre JobPass", "Accédez à votre CV, vos messages, votre préparation d'entretien et votre plan de candidature."],
    ],
    vacancyEyebrow: "Postuler à une offre",
    vacancyTitle: "Arrêtez d'envoyer le même CV à tout le monde.",
    vacancySub:
      "Collez l'offre. JobPass identifie ce qui peut être mis en avant uniquement à partir de votre expérience réelle.",
    vacancyCards: ["Profil", "Expérience", "Lettre", "Message"],
    integrity:
      "La règle reste simple : adapter l'accent sans inventer entreprises, résultats, qualifications ou compétences.",
    faqEyebrow: "Avant de commencer",
    faqTitle: "Questions fréquentes",
    faq: [
      ["JobPass me trouve-t-il un emploi ?", "Non. JobPass prépare vos documents et votre stratégie. Le recrutement dépend des employeurs et de leur processus."],
      ["L'outil invente-t-il de l'expérience ?", "Non. JobPass organise uniquement les informations que vous fournissez."],
      ["Puis-je l'utiliser avant mon départ ?", "Oui. Vous pouvez préparer votre dossier et commencer à repérer les offres avant de déménager."],
      ["Quels pays sont disponibles ?", "L'architecture est internationale. L'Espagne et le Portugal sont les premiers marchés approfondis avant l'expansion."],
    ],
    finalTitle:
      "Un déménagement international demande déjà beaucoup. Votre candidature ne doit pas partir de zéro.",
    finalCta: "Créer mon JobPass",
    responsible: "Information responsable",
    footer:
      "JobPass est un outil de préparation professionnelle. Les informations migratoires, légales et liées au droit au travail doivent être vérifiées auprès de sources officielles à jour.",
  },
  de: {
    nav: ["Was du bekommst", "So funktioniert es", "Fragen"],
    brand: "Internationaler Jobstart",
    cta: "Mein JobPass erstellen",
    proof: "+8.000 Einwanderer fanden mit unseren Strategien einen Job im Ausland",
    eyebrow: "Für alle, die in einem anderen Land arbeiten möchten",
    hero: "Sichere dir deinen Job in jedem Land, noch bevor du reist.",
    heroSub:
      "Starte mit dem richtigen Weg, um dich auf die Stellen zu bewerben, die dich interessieren. JobPass gibt dir das passende Paket mit Strategien von Einwanderern aus aller Welt, damit du die richtigen Chancen findest und deinem Ziel, im Ausland zu leben, näherkommst.",
    heroCta: "Mein JobPass erstellen",
    minutes: "Der Start dauert nur wenige Minuten",
    trust: ["Keine erfundene Erfahrung", "Auf das Zielland abgestimmt", "Sofort nutzbar"],
    reviewsTitle: "Menschen, die unsere Strategien bereits genutzt haben",
    deliverEyebrow: "Dein professionelles Paket",
    deliverTitle: "Mehr als nur ein Lebenslauf.",
    deliverSub:
      "Du erhältst alles, was du sonst einzeln erstellen, übersetzen und anpassen müsstest.",
    deliver: [
      ["Angepasster Lebenslauf", "Professioneller Lebenslauf nach den Standards des Ziellandes."],
      ["ATS-Version", "Klare Struktur für Recruiting-Systeme ohne erfundene Angaben."],
      ["Landessprache", "Deine Unterlagen in der Sprache, die für Bewerbungen verwendet wird."],
      ["Fertige Nachrichten", "WhatsApp, E-Mail, LinkedIn, Telefon und persönliche Vorstellung."],
      ["Anpassung an Stellen", "Füge eine Stelle ein und richte deine Unterlagen auf echte Anforderungen aus."],
      ["7-Tage-Plan", "Jobportale, Suchbegriffe und praktische Bewerbungsroutine."],
    ],
    howEyebrow: "So funktioniert es",
    howTitle: "In drei Schritten von null zu fertigen Unterlagen.",
    howSub:
      "Du lieferst die Fakten. JobPass organisiert deine Bewerbung passend zum gewählten Markt.",
    steps: [
      ["Zielland wählen", "Sag uns, woher du kommst, wohin du gehst und in welchem Bereich du arbeiten möchtest."],
      ["Erfahrung teilen", "Füge deinen Lebenslauf ein, lade ihn hoch oder beginne von vorn."],
      ["JobPass erhalten", "Öffne dein Dashboard mit Lebenslauf, Nachrichten, Interviewtraining und Bewerbungsplan."],
    ],
    vacancyEyebrow: "Auf eine Stelle bewerben",
    vacancyTitle: "Schick nicht mehr denselben Lebenslauf an alle.",
    vacancySub:
      "Füge die Stellenbeschreibung ein. JobPass hebt nur Erfahrungen und Fähigkeiten hervor, die du tatsächlich angegeben hast.",
    vacancyCards: ["Profil", "Erfahrung", "Anschreiben", "Nachricht"],
    integrity:
      "Die Regel ist einfach: Fokus anpassen, ohne Firmen, Ergebnisse, Qualifikationen oder Fähigkeiten zu erfinden.",
    faqEyebrow: "Vor dem Start",
    faqTitle: "Häufige Fragen",
    faq: [
      ["Verschafft mir JobPass einen Job?", "Nein. JobPass bereitet Unterlagen und Bewerbungsstrategie vor. Die Einstellung hängt vom Arbeitgeber ab."],
      ["Erfindet das Tool Erfahrungen?", "Nein. JobPass organisiert nur die Informationen, die du selbst angibst."],
      ["Kann ich JobPass vor dem Umzug nutzen?", "Ja. Du kannst alles vorbereiten und schon vor dem Umzug nach Stellen suchen."],
      ["Welche Länder werden unterstützt?", "Die Architektur ist international. Spanien und Portugal sind die ersten vertieft unterstützten Märkte."],
    ],
    finalTitle:
      "Ein Umzug ins Ausland bringt genug Aufgaben mit sich. Deine Bewerbung muss nicht bei null anfangen.",
    finalCta: "Mein JobPass erstellen",
    responsible: "Verantwortungsvolle Informationen",
    footer:
      "JobPass ist ein Tool zur beruflichen Vorbereitung. Migrations-, Rechts- und Arbeitserlaubnisinformationen sollten immer mit aktuellen offiziellen Quellen geprüft werden.",
  },
  it: {
    nav: ["Cosa ricevi", "Come funziona", "Domande"],
    brand: "Lavoro internazionale",
    cta: "Crea il mio JobPass",
    proof: "+8.000 immigrati hanno trovato lavoro all'estero con le nostre strategie",
    eyebrow: "Per chi vuole lavorare in un altro paese",
    hero: "Ottieni il tuo lavoro in qualsiasi paese ancora prima di partire.",
    heroSub:
      "Inizia dal percorso giusto per candidarti alle posizioni che ti interessano. JobPass ti fornisce il kit ideale, con strategie usate da immigrati di tutto il mondo, per trovare le opportunità giuste e avvicinarti al sogno di vivere all'estero.",
    heroCta: "Crea il mio JobPass",
    minutes: "Bastano pochi minuti per iniziare",
    trust: ["Nessuna esperienza inventata", "Adattato alla destinazione", "Pronto da usare"],
    reviewsTitle: "Chi ha già usato le nostre strategie",
    deliverEyebrow: "Il tuo kit professionale",
    deliverTitle: "Non è solo un CV.",
    deliverSub:
      "Ricevi tutto ciò che normalmente dovresti creare, tradurre e adattare separatamente.",
    deliver: [
      ["CV adattato", "Un CV professionale adeguato agli standard del paese di destinazione."],
      ["Versione ATS", "Struttura pulita per i sistemi di recruiting, senza informazioni inventate."],
      ["Lingua locale", "Materiale preparato nella lingua usata per le candidature."],
      ["Messaggi pronti", "WhatsApp, e-mail, LinkedIn, telefono e presentazione di persona."],
      ["Adattamento alla posizione", "Incolla un'offerta e focalizza il materiale sui requisiti che possiedi davvero."],
      ["Piano di 7 giorni", "Portali, termini di ricerca e routine pratica per iniziare a candidarti."],
    ],
    howEyebrow: "Come funziona",
    howTitle: "Da zero al materiale pronto in tre passaggi.",
    howSub:
      "Tu fornisci i fatti. JobPass organizza la candidatura intorno al mercato scelto.",
    steps: [
      ["Scegli la destinazione", "Indica da dove vieni, dove vai e in quale settore vuoi lavorare."],
      ["Racconta la tua esperienza", "Incolla il CV, caricalo o parti da zero. Non serve scrivere in modo perfetto."],
      ["Ricevi il tuo JobPass", "Apri la dashboard con CV, messaggi, colloquio, ricerca lavoro e piano di candidatura."],
    ],
    vacancyEyebrow: "Candidati a un'offerta",
    vacancyTitle: "Smetti di inviare lo stesso CV a tutti.",
    vacancySub:
      "Incolla la descrizione dell'offerta. JobPass evidenzia solo esperienze e competenze che hai realmente indicato.",
    vacancyCards: ["Profilo", "Esperienza", "Lettera", "Messaggio"],
    integrity:
      "La regola è semplice: adattare il focus senza inventare aziende, risultati, qualifiche o competenze.",
    faqEyebrow: "Prima di iniziare",
    faqTitle: "Domande frequenti",
    faq: [
      ["JobPass mi trova un lavoro?", "No. JobPass prepara materiali e strategia. L'assunzione dipende dalle aziende e dal processo di selezione."],
      ["Lo strumento inventa esperienza?", "No. JobPass organizza solo le informazioni che fornisci."],
      ["Posso usarlo prima di trasferirmi?", "Sì. Puoi preparare tutto prima del viaggio e iniziare a mappare le opportunità."],
      ["Quali paesi saranno disponibili?", "L'architettura è internazionale. Spagna e Portogallo sono i primi mercati supportati in profondità."],
    ],
    finalTitle:
      "Trasferirsi all'estero comporta già abbastanza cose da risolvere. La candidatura non deve partire da zero.",
    finalCta: "Crea il mio JobPass",
    responsible: "Informazioni responsabili",
    footer:
      "JobPass è uno strumento di preparazione professionale. Le informazioni migratorie, legali e sul diritto al lavoro devono essere verificate su fonti ufficiali aggiornate.",
  },
} as const;

const testimonials = [
  ["Renata Rivera", "renatariveluz@gmai.com", "Super recomendo!! Consegui meu emprego até antes da viagem!"],
  ["Jorge Miguel", "migueljorgecol@gmail.com", "Ótimas indicações de vaga pra minha área"],
  ["Yusuf Chadli", "yusufkarim33@gmail.com", "Fui selecionado pra 3 entrevistas"],
  ["Juan Pablo", "juviveros834@gmail.com", "Viajo semana que vem e já consegui meu emprego graças as estratégias"],
] as const;

const featureIcons = [
  FileText,
  BadgeCheck,
  Languages,
  MessageSquareText,
  BriefcaseBusiness,
];

function detectLanguage(): Lang {
  if (typeof navigator === "undefined") return "en";
  const saved = window.localStorage.getItem("jobpass-language") as Lang | null;
  if (saved && saved in copy) return saved;
  const code = navigator.language.toLowerCase().split("-")[0];
  return (["pt", "es", "en", "fr", "de", "it"] as string[]).includes(code) ? (code as Lang) : "en";
}

function Brand({ subtitle }: { subtitle: string }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-[#b8892e] font-bold text-white shadow-[0_6px_18px_rgba(184,137,46,.22)]">
        J
      </span>
      <div className="leading-none">
        <b className="text-lg tracking-tight">JobPass</b>
        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[.2em] text-warm-muted">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

function ProductMockup() {
  return (
    <div className="relative ml-auto w-full min-w-0 max-w-[790px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-[#d4af37]/14 blur-3xl" />
      <img
        src="/jobpass-dashboard.svg"
        alt="JobPass dashboard"
        className="relative block w-full rounded-[2rem] border border-[#d4af37]/25 shadow-[0_34px_90px_rgba(122,91,29,.18)]"
        loading="eager"
      />
    </div>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <label className="hidden items-center gap-1.5 text-xs text-warm-muted lg:flex">
      <Globe2 className="size-3.5" />
      <select
        aria-label="Language"
        value={lang}
        onChange={(event) => setLang(event.target.value as Lang)}
        className="bg-transparent font-medium outline-none"
      >
        <option value="pt">PT</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
        <option value="it">IT</option>
      </select>
    </label>
  );
}

function Index() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const detected = detectLanguage();
    setLangState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("jobpass-language", next);
    document.documentElement.lang = next;
  };

  const t = copy[lang];

  return (
    <div className="min-h-dvh bg-white text-[#211b12]">
      <header className="sticky top-0 z-30 border-b border-[#d4af37]/20 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Brand subtitle={t.brand} />
          <nav className="hidden items-center gap-7 text-sm text-warm-muted md:flex">
            <a href="#recebe" className="hover:text-ink">
              {t.nav[0]}
            </a>
            <a href="#como" className="hover:text-ink">
              {t.nav[1]}
            </a>
            <a href="#faq" className="hover:text-ink">
              {t.nav[2]}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <Button asChild className="rounded-full bg-[#b8892e] px-5 text-white shadow-[0_8px_22px_rgba(184,137,46,.2)] hover:bg-[#9f7527]">
              <Link to="/criar">{t.cta}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fffdf7_58%,#f7f0df_100%)] text-[#211b12]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(212,175,55,.12),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(184,137,46,.1),transparent_28%)]"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 pt-9 sm:px-8 sm:pt-12">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center overflow-hidden rounded-2xl border border-[#d4af37]/55 bg-white px-5 py-4 text-center shadow-[0_14px_34px_rgba(122,91,29,.09)] sm:px-8">
              <div aria-hidden className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,#d4af37,transparent)]" />
              <div className="relative flex items-center justify-center">
                <p className="text-xl font-bold leading-tight text-[#3a2d16] sm:text-2xl">{t.proof}</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-[1480px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12 lg:py-24 xl:gap-14">
            <div className="min-w-0 w-full max-w-[690px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#fffaf0] px-3 py-1.5 text-xs font-medium text-[#8a681f]">
                <Globe2 className="size-3.5" /> {t.eyebrow}
              </div>
              <h1 className="mt-6 max-w-full text-[2.8rem] font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[3.15rem] xl:text-[3.35rem]">
                {lang === "pt" ? (
                  <>
                    <span className="block">Consiga sua vaga em qualquer país</span>
                    <span className="block">antes mesmo de viajar.</span>
                  </>
                ) : (
                  t.hero
                )}
              </h1>
              <p className="mt-6 max-w-[57ch] text-base leading-7 text-[#6b604e] sm:text-lg">
                {t.heroSub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#b8892e] px-7 text-white shadow-[0_10px_26px_rgba(184,137,46,.22)] hover:bg-[#9f7527]"
                >
                  <Link to="/criar">
                    {t.heroCta} <ArrowRight />
                  </Link>
                </Button>
                <span className="text-sm text-[#7b705f]">{t.minutes}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#8a681f]">
                {t.trust.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
            </div>
            <ProductMockup />
          </div>
        </section>

        <section className="border-b border-[#d4af37]/15 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8">
            <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[.18em] text-warm-muted">
              {t.reviewsTitle}
            </p>
            <div className="grid gap-2 md:grid-cols-4">
              {testimonials.map(([name, email, quote]) => (
                <article
                  key={email}
                  className="rounded-xl border border-[#d4af37]/20 bg-white px-4 py-3 shadow-[0_8px_22px_rgba(122,91,29,.05)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <b className="block text-sm">{name}</b>
                      <span className="block truncate text-[10px] text-warm-muted">{email}</span>
                    </div>
                    <span
                      className="shrink-0 text-[12px] font-semibold leading-none tracking-[.05em] text-[#d4af37]"
                      aria-label="5 estrelas"
                    >
                      ★★★★★
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-5 text-warm-muted">
                    “{quote}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="recebe"
          className="scroll-mt-24 mx-auto max-w-[1280px] bg-white px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9b7728]">
              {t.deliverEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              {t.deliverTitle}
            </h2>
            <p className="mt-4 text-lg leading-7 text-warm-muted">
              {t.deliverSub}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.deliver.filter((_, index) => index !== 4).map(([title, description], index) => {
              const Icon = featureIcons[index]!;
              return (
                <article
                  key={title}
                  className="group rounded-2xl border border-[#d4af37]/20 bg-white p-6 shadow-[0_10px_28px_rgba(122,91,29,.05)] transition-transform hover:-translate-y-1"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-[#fff6dc]">
                    <Icon className="size-5 text-[#a57d27]" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-warm-muted">
                    {description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="como" className="scroll-mt-24 border-y border-[#d4af37]/15 bg-[#fffdf8]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9b7728]">
                  {t.howEyebrow}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                  {t.howTitle}
                </h2>
                <p className="mt-4 text-warm-muted">{t.howSub}</p>
              </div>
              <ol className="space-y-3">
                {t.steps.map(([title, description], index) => (
                  <li
                    key={title}
                    className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-[#d4af37]/20 bg-white p-5 shadow-[0_8px_20px_rgba(122,91,29,.04)]"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-[#b8892e] text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-warm-muted">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-24 mx-auto max-w-[980px] px-5 py-20 sm:px-8 sm:py-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-clay">
            {t.faqEyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            {t.faqTitle}
          </h2>
          <div className="mt-8 divide-y divide-[#d4af37]/15 border-y border-[#d4af37]/15">
            {t.faq.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                  {question}
                  <span className="text-xl text-[#b8892e] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-warm-muted">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d4af37]/20 bg-[linear-gradient(135deg,#fffdf8,#f4e6bd)] text-[#211b12]">
          <div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-8">
            <Sparkles className="mx-auto size-7 text-[#b8892e]" />
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
              {t.finalTitle}
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-7 rounded-full bg-[#b8892e] px-7 text-white shadow-[0_10px_26px_rgba(184,137,46,.22)] hover:bg-[#9f7527]"
            >
              <Link to="/criar">
                {t.finalCta} <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4af37]/20 bg-white text-[#211b12]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Brand subtitle={t.brand} />
          <div className="max-w-xl text-xs leading-5 text-[#7b705f]">
            <div className="mb-2 flex items-center gap-2 font-medium text-[#9b7728]">
              <ShieldCheck className="size-4" /> {t.responsible}
            </div>
            {t.footer}
          </div>
        </div>
      </footer>
    </div>
  );
}
