import React, { useMemo, useState } from "react";

const benefits = [
  {
    title: "Schnellere Angebote",
    text: "Aus einer Kundenanfrage entsteht in Minuten ein prüfbarer Angebotsentwurf.",
    icon: "⚡",
  },
  {
    title: "Weniger Rückfragen-Chaos",
    text: "Der Assistent erkennt fehlende Angaben und formuliert passende Rückfragen.",
    icon: "🧾",
  },
  {
    title: "Bessere Priorisierung",
    text: "Dringende Schäden, Wassereintritt und lukrative Anfragen werden schneller sichtbar.",
    icon: "🚨",
  },
  {
    title: "Einheitliche Kommunikation",
    text: "Kunden bekommen professionelle Antworten, egal wer gerade im Büro sitzt.",
    icon: "✉️",
  },
];

const features = [
  "Anfrage-Assistent für Telefon, WhatsApp, E-Mail und Website",
  "KI-Prüfung auf Risiken, fehlende Angaben und Dringlichkeit",
  "Richtpreis-Kalkulation nach eigener Preislogik",
  "Material- und Einsatzliste für Büro, Lager oder Monteur",
  "Angebotsentwurf mit Leistungsumfang und Kalkulationspositionen",
  "Kundenmail oder WhatsApp-Antwort auf Knopfdruck",
  "Mini-Pipeline für offene Anfragen und Angebotsstatus",
  "Später ausbaubar mit PDF, CRM, Kalender und Login",
];

const packages = [
  {
    name: "Starter",
    price: "999 €",
    monthly: "199 €/Monat",
    description:
      "Für kleine Betriebe, die schneller Angebotsentwürfe und Kundenantworten erstellen wollen.",
    items: [
      "Anfrageformular",
      "Angebotsentwurf",
      "Kundenmail",
      "einfache Preislogik",
      "1 Nutzer",
    ],
    highlight: false,
  },
  {
    name: "Pilot",
    price: "2.500 €",
    monthly: "499 €/Monat",
    description:
      "Für Betriebe, die den Assistenten ernsthaft im Büro testen und anpassen wollen.",
    items: [
      "individuelle Preislogik",
      "Risikoanalyse",
      "Materiallisten",
      "Mini-Pipeline",
      "Schulung",
      "Support",
    ],
    highlight: true,
  },
  {
    name: "Betrieb Plus",
    price: "ab 5.000 €",
    monthly: "ab 990 €/Monat",
    description:
      "Für Betriebe mit mehreren Nutzern, CRM-Anbindung oder individuellem Workflow.",
    items: [
      "PDF mit Logo",
      "E-Mail-Versand",
      "Kalenderanbindung",
      "CRM-Anbindung",
      "Rollen und Freigaben",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Ersetzt die KI unseren Kalkulator?",
    a: "Nein. Die KI bereitet Anfragen vor, macht Vorschläge und spart Bürozeit. Die fachliche Prüfung und Freigabe bleiben beim Betrieb.",
  },
  {
    q: "Sind die Preise verbindlich?",
    a: "Nein. Die Kalkulation ist ein Richtwert auf Basis Ihrer Preislogik. Verbindliche Angebote sollten weiterhin geprüft und freigegeben werden.",
  },
  {
    q: "Funktioniert das mit WhatsApp-Anfragen?",
    a: "Ja. Im Pilot kann der Text aus WhatsApp übernommen werden. Eine direkte WhatsApp-Anbindung kann später geprüft werden.",
  },
  {
    q: "Kann unser Logo ins Angebot?",
    a: "Ja. In der nächsten Ausbaustufe kann ein PDF-Angebot mit Logo, Firmenangaben und Layout erstellt werden.",
  },
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children, dark = false }) {
  return (
    <span
      className={
        dark
          ? "rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white"
          : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
      }
    >
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <div
          className={
            dark
              ? "mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300"
              : "mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700"
          }
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={
          dark
            ? "text-3xl font-black tracking-tight text-white md:text-5xl"
            : "text-3xl font-black tracking-tight text-slate-950 md:text-5xl"
        }
      >
        {title}
      </h2>
      {text ? (
        <p
          className={
            dark
              ? "mt-4 text-base leading-7 text-slate-300 md:text-lg"
              : "mt-4 text-base leading-7 text-slate-600 md:text-lg"
          }
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function MetricMini({ label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-2xl font-black text-slate-950">{value}</div>
    </div>
  );
}

function DemoCard() {
  return (
    <Card className="bg-slate-950 text-white shadow-2xl shadow-slate-300">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-blue-300">Live-Beispiel</div>
          <h3 className="mt-1 text-2xl font-black">
            Aus Anfrage wird Angebot
          </h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl">
          🏠
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-300">
            Kundenanfrage
          </div>
          <p className="text-sm leading-6 text-slate-100">
            „Hallo, bei uns sind mehrere Ziegel kaputt und es tropft am
            Dachfenster. Können Sie kurzfristig schauen?“
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">Risiko</div>
            <div className="mt-1 font-bold">Wassereintritt möglich</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">Richtpreis</div>
            <div className="mt-1 font-bold">1.600–2.100 € netto</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">Rückfrage</div>
            <div className="mt-1 font-bold">Fotos + Zugang klären</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">Ausgabe</div>
            <div className="mt-1 font-bold">Angebot + Kundenmail</div>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-400 p-4 text-slate-950">
          <div className="text-xs font-bold uppercase tracking-wide">
            Ergebnis
          </div>
          <div className="mt-1 text-lg font-black">
            Büro spart 20–40 Minuten pro Anfrage
          </div>
        </div>
      </div>
    </Card>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let value = 0;
    if (form.name.trim()) value += 25;
    if (form.company.trim()) value += 25;
    if (form.phone.trim()) value += 25;
    if (form.message.trim()) value += 25;
    return value;
  }, [form]);

  function update(key, value) {
    setSubmitted(false);
    setForm((old) => ({ ...old, [key]: value }));
  }

  return (
    <Card className="bg-slate-950 text-white">
      <div className="mb-6">
        <Badge dark>Pilotplatz anfragen</Badge>
        <h3 className="mt-4 text-3xl font-black">
          Kostenlose 15-Minuten-Demo
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Füllen Sie die Anfrage aus. In der echten Website würde das Formular
          per E-Mail, CRM oder Kalenderbuchung angebunden.
        </p>
      </div>

      <div className="space-y-4">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Ihr Name"
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
        />
        <input
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder="Betrieb"
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
        />
        <input
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="Telefon oder E-Mail"
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
        />
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Was ist aktuell der größte Engpass bei Anfragen und Angeboten?"
          className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
        />

        <div className="rounded-2xl bg-white/10 p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
            <span>Formular-Fortschritt</span>
            <span>{score}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
        >
          Demo anfragen
        </button>

        {submitted ? (
          <div className="rounded-2xl bg-emerald-400/10 p-4 text-sm font-semibold text-emerald-200">
            Danke! In einer echten Version würde diese Anfrage jetzt an dich
            oder dein CRM gesendet.
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button
            onClick={() => scrollToId("top")}
            className="flex items-center gap-3 text-left"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-xl text-white">
              🏠
            </div>
            <div>
              <div className="font-black leading-tight">DachKI</div>
              <div className="text-xs text-slate-500">Angebotsassistent</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <button
              onClick={() => scrollToId("problem")}
              className="hover:text-slate-950"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToId("funktionen")}
              className="hover:text-slate-950"
            >
              Funktionen
            </button>
            <button
              onClick={() => scrollToId("preise")}
              className="hover:text-slate-950"
            >
              Preise
            </button>
            <button
              onClick={() => scrollToId("faq")}
              className="hover:text-slate-950"
            >
              FAQ
            </button>
          </nav>

          <button
            onClick={() => scrollToId("kontakt")}
            className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Demo buchen
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>Für Dachdeckerbetriebe</Badge>
                <Badge>Verkaufbarer Pilot</Badge>
                <Badge>Keine KI-Spielerei</Badge>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                Aus Dachdecker-Anfragen werden in 2 Minuten Angebotsentwürfe.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Der KI-Assistent qualifiziert Kundenanfragen, erkennt fehlende
                Angaben, berechnet grobe Richtpreise und erstellt
                Kundenantworten, Materiallisten und Angebotsentwürfe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToId("kontakt")}
                  className="rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  Kostenlose Demo anfragen
                </button>
                <button
                  onClick={() => scrollToId("demo")}
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
                >
                  Beispiel ansehen
                </button>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <MetricMini label="Zeitersparnis" value="20–40 Min." />
                <MetricMini label="Pilotstart" value="30 Tage" />
                <MetricMini label="ab" value="750 €" />
              </div>
            </div>

            <div id="demo">
              <DemoCard />
            </div>
          </div>
        </section>

        <section id="problem" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Das Problem"
              title="Gute Aufträge gehen verloren, bevor das Angebot rausgeht"
              text="Viele Anfragen kommen unvollständig rein. Das Büro fragt nach, kalkuliert manuell, sucht Fotos, sortiert Notizen und antwortet oft zu spät."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-red-50">
                <h3 className="text-2xl font-black text-red-950">Vorher</h3>
                <p className="mt-3 leading-7 text-red-900">
                  Ein Kunde schreibt: „Ziegel kaputt, es tropft am
                  Dachfenster.“ Danach beginnt das manuelle Nachfragen:
                  Adresse, Fotos, Dachfläche, Zugang, Dringlichkeit und
                  Zuständigkeit.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-red-900">
                  <li>• Rückfragen per Telefon, WhatsApp und E-Mail</li>
                  <li>• unklare Zuständigkeit im Büro</li>
                  <li>• verspätete Angebotsentwürfe</li>
                  <li>• verlorene oder vergessene Leads</li>
                </ul>
              </Card>

              <Card className="bg-emerald-50">
                <h3 className="text-2xl font-black text-emerald-950">
                  Nachher
                </h3>
                <p className="mt-3 leading-7 text-emerald-900">
                  Der Assistent strukturiert die Anfrage, markiert Risiken,
                  erstellt Rückfragen, schätzt den Aufwand und formuliert eine
                  professionelle Kundenantwort.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-emerald-900">
                  <li>• klare Rückfragen an den Kunden</li>
                  <li>• Richtpreis und Materialliste</li>
                  <li>• Angebotsentwurf zur Prüfung</li>
                  <li>• strukturierte Pipeline fürs Büro</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Nutzen"
              title="Weniger Bürochaos. Schnellere Angebote. Mehr angenommene Aufträge."
              text="Der Assistent ersetzt nicht das Handwerk. Er nimmt dem Büro die Vorarbeit ab."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card key={item.title}>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="funktionen"
          className="bg-slate-950 px-4 py-16 text-white md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              dark
              eyebrow="Funktionen"
              title="Was im Pilot enthalten ist"
              text="Alles, was ein Dachdeckerbetrieb braucht, um Anfragen schneller zu prüfen und Angebote vorzubereiten."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-400 text-sm font-black text-slate-950">
                    ✓
                  </span>
                  <span className="leading-7 text-slate-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Ablauf"
              title="So läuft die Demo ab"
              text="Keine lange Präsentation. Es geht direkt um echte Anfragen aus dem Dachdecker-Alltag."
            />

            <div className="grid gap-6 md:grid-cols-4">
              {[
                "Typische Anfrage zeigen",
                "In den Assistenten eingeben",
                "Vorschläge prüfen",
                "Pilot anpassen",
              ].map((step, index) => (
                <Card key={step}>
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-black">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {index === 0
                      ? "Sie bringen eine WhatsApp, E-Mail oder Telefonnotiz mit."
                      : index === 1
                      ? "Wir erfassen Schaden, Material, Dringlichkeit, Maße und Fotos."
                      : index === 2
                      ? "Sie sehen Risiken, Rückfragen, Kalkulation, Material und Entwurf."
                      : "Wir klären, was für Ihren Betrieb anders laufen muss."}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="preise" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Angebot"
              title="Pilot-Angebot für Dachdeckerbetriebe"
              text="Für den ersten Test bewusst schlank: einrichten, echte Anfragen testen, danach entscheiden."
            />

            <div className="mb-10 rounded-[2rem] bg-slate-950 p-6 text-white md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <Badge dark>Einführungsangebot</Badge>
                  <h3 className="mt-4 text-3xl font-black">
                    30 Tage Pilot für 750 € einmalig
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                    Einrichtung mit Ihren Betriebsdaten, Leistungen,
                    Preislogik, Angebotsvorlage, Kundenantworten, Mini-Pipeline
                    und kurzer Einweisung. Danach Weiterbetrieb ab 299 €/Monat.
                  </p>
                </div>

                <button
                  onClick={() => scrollToId("kontakt")}
                  className="rounded-2xl bg-emerald-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Pilotplatz anfragen
                </button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map((pack) => (
                <Card
                  key={pack.name}
                  className={
                    pack.highlight ? "border-slate-950 ring-4 ring-slate-200" : ""
                  }
                >
                  {pack.highlight ? <Badge>Pilot empfohlen</Badge> : null}
                  <h3 className="mt-4 text-2xl font-black">{pack.name}</h3>
                  <div className="mt-4 text-4xl font-black">{pack.price}</div>
                  <div className="mt-1 text-sm font-bold text-slate-500">
                    {pack.monthly}
                  </div>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
                    {pack.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-slate-700">
                    {pack.items.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Häufige Fragen"
              text="Die wichtigsten Einwände direkt beantwortet."
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 open:bg-white"
                >
                  <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                    <span className="mr-2">▸</span>
                    {faq.q}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Nächster Schritt
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Testen Sie den Assistenten mit echten Anfragen.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                In 15 Minuten sehen Sie, ob der KI-Assistent Ihren
                Angebotsprozess beschleunigen kann. Bringen Sie einfach eine
                typische Anfrage mit.
              </p>

              <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                <div className="font-black">
                  Kurz-Pitch für Telefon oder WhatsApp
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  „Ich baue einen KI-Assistenten für Dachdeckerbetriebe, der aus
                  Kundenanfragen automatisch Rückfragen, Richtpreise,
                  Materiallisten und Angebotsentwürfe vorbereitet. Ziel ist,
                  dass Ihr Büro schneller reagiert und weniger Zeit mit
                  Angebotstexten verliert.“
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 DachKI Angebotsassistent</div>
          <div>KI entscheidet nicht — der Betrieb prüft und gibt frei.</div>
        </div>
      </footer>
    </div>
  );
}