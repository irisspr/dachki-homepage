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
  const hasCustomBackground = className.includes("bg-");

  return (
    <div
      className={`rounded-3xl border border-slate-200 p-6 shadow-sm ${
        hasCustomBackground ? "" : "bg-white"
      } ${className}`}
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
  const [form, setForm] = useState({
    job: "Neueindeckung",
    urgency: "Normal",
    area: 15,
    roofShape: "Pultdach",
    material: "Metall",
    inquiry:
      "Hallo, wir brauchen einen Dachdecker für unser Gartenhaus, 5 x 3 Meter. Gewünscht ist ein Blechdach.",
  });

  function update(key, value) {
    setForm((old) => ({ ...old, [key]: value }));
  }

  const result = useMemo(() => {
    const baseArea = Number(form.area || 0);

    const roofShapeFactor = {
      Flachdach: 1,
      Pultdach: 1.08,
      Satteldach: 1.18,
    };

    const calculatedArea = Math.round(
      baseArea * (roofShapeFactor[form.roofShape] || 1)
    );

    const jobPrices = {
      Dachreparatur: { base: 650, sqm: 12 },
      Neueindeckung: { base: 2800, sqm: 85 },
      "Flachdach-Abdichtung": { base: 1600, sqm: 48 },
      Dachfenster: { base: 950, sqm: 6 },
      Sturmschaden: { base: 850, sqm: 18 },
    };

    const materialFactor = {
      Tonziegel: 1,
      Betondachstein: 0.9,
      Schiefer: 1.65,
      Bitumen: 0.8,
      Metall: 1.3,
    };

    const urgencyFactor = {
      Normal: 1,
      "Diese Woche": 1.1,
      Dringend: 1.22,
      Wassereintritt: 1.38,
    };

    const job = jobPrices[form.job] || jobPrices.Dachreparatur;
    const material = materialFactor[form.material] || 1;
    const urgency = urgencyFactor[form.urgency] || 1;

    const net = Math.round(
      (job.base + calculatedArea * job.sqm * material) * urgency
    );

    const low = Math.round(net * 0.9);
    const high = Math.round(net * 1.18);

    const text = form.inquiry.toLowerCase();

    const risks = [];

    if (
      form.urgency === "Wassereintritt" ||
      text.includes("tropft") ||
      text.includes("wasser") ||
      text.includes("undicht")
    ) {
      risks.push(
        "Wassereintritt möglich: schnelle Sicherung und Fotodokumentation empfehlen."
      );
    }

    if (form.roofShape === "Flachdach") {
      risks.push(
        "Flachdach: Abdichtung, Gefälle, Wasserablauf und Randanschlüsse prüfen."
      );
    }

    if (form.roofShape === "Pultdach") {
      risks.push(
        "Pultdach: Gefälle, Traufkante und Befestigung der Blechprofile prüfen."
      );
    }

    if (form.roofShape === "Satteldach") {
      risks.push(
        "Satteldach: First, Ortgänge und beide Dachseiten bei der Kalkulation berücksichtigen."
      );
    }

    if (form.material === "Metall") {
      risks.push(
        "Blechdach: Kondensat, Belüftung, Befestigung und Unterkonstruktion klären."
      );
    }

    if (calculatedArea > 120) {
      risks.push("Größere Fläche: Vor-Ort-Termin vor Festpreis sinnvoll.");
    }

    if (form.material === "Schiefer") {
      risks.push(
        "Schiefer: Spezialmaterial und längere Ausführungszeit einplanen."
      );
    }

    if (!risks.length) {
      risks.push(
        "Keine kritischen Warnsignale erkannt. Angebot trotzdem fachlich prüfen."
      );
    }

    const questions = [
      `Bitte bestätigen: Handelt es sich um ein ${form.roofShape}?`,
      "Soll das alte Dach entfernt und entsorgt werden?",
      "Ist eine tragfähige Unterkonstruktion vorhanden?",
      "Soll nur die Blechdeckung montiert werden oder auch Unterspannbahn/Lattung?",
      "Bitte 2–3 Fotos vom Gartenhaus und vom aktuellen Dach senden.",
      "Ist der Zugang zum Gartenhaus mit Material gut möglich?",
    ];

    const customerReply = [
      "Hallo,",
      "",
      `vielen Dank für Ihre Anfrage zur Leistung „${form.job}“.`,
      `Auf Basis Ihrer Angaben gehen wir von ca. ${baseArea} m² Grundfläche aus.`,
      `Bei der Dachform „${form.roofShape}“ schätzen wir die relevante Dachfläche auf ca. ${calculatedArea} m².`,
      "",
      `Als erste Orientierung liegt der Richtpreis bei ca. ${low.toLocaleString(
        "de-DE"
      )}–${high.toLocaleString("de-DE")} € netto.`,
      "",
      "Für ein verbindliches Angebot benötigen wir noch Fotos vom Gartenhaus, Informationen zur vorhandenen Unterkonstruktion und eine kurze Klärung, ob das alte Dach entfernt werden soll.",
      "",
      "Viele Grüße",
      "Ihr Dachdecker-Team",
    ].join("\n");

    return {
      net,
      low,
      high,
      calculatedArea,
      risks,
      questions,
      customerReply,
    };
  }, [form]);

  return (
    <Card className="bg-slate-950 text-white shadow-2xl shadow-slate-300">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-blue-300">
            Interaktive Demo
          </div>
          <h3 className="mt-1 text-2xl font-black">Anfrage testen</h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl">
          🏠
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={form.inquiry}
          onChange={(e) => update("inquiry", e.target.value)}
          className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
          placeholder="Kundenanfrage eingeben..."
        />

        <div className="grid gap-3 md:grid-cols-2">
          <label className="block">
            <div className="mb-1 text-xs font-bold text-slate-300">
              Leistung
            </div>
            <select
              value={form.job}
              onChange={(e) => update("job", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            >
              <option className="text-slate-900">Dachreparatur</option>
              <option className="text-slate-900">Neueindeckung</option>
              <option className="text-slate-900">Flachdach-Abdichtung</option>
              <option className="text-slate-900">Dachfenster</option>
              <option className="text-slate-900">Sturmschaden</option>
            </select>
          </label>

          <label className="block">
            <div className="mb-1 text-xs font-bold text-slate-300">
              Dringlichkeit
            </div>
            <select
              value={form.urgency}
              onChange={(e) => update("urgency", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            >
              <option className="text-slate-900">Normal</option>
              <option className="text-slate-900">Diese Woche</option>
              <option className="text-slate-900">Dringend</option>
              <option className="text-slate-900">Wassereintritt</option>
            </select>
          </label>

          <label className="block">
            <div className="mb-1 text-xs font-bold text-slate-300">
              Grundfläche ca. m²
            </div>
            <input
              type="number"
              value={form.area}
              onChange={(e) => update("area", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            />
          </label>

          <label className="block">
            <div className="mb-1 text-xs font-bold text-slate-300">
              Dachform
            </div>
            <select
              value={form.roofShape}
              onChange={(e) => update("roofShape", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            >
              <option className="text-slate-900">Flachdach</option>
              <option className="text-slate-900">Pultdach</option>
              <option className="text-slate-900">Satteldach</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <div className="mb-1 text-xs font-bold text-slate-300">
              Material
            </div>
            <select
              value={form.material}
              onChange={(e) => update("material", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            >
              <option className="text-slate-900">Tonziegel</option>
              <option className="text-slate-900">Betondachstein</option>
              <option className="text-slate-900">Schiefer</option>
              <option className="text-slate-900">Bitumen</option>
              <option className="text-slate-900">Metall</option>
            </select>
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">geschätzte Dachfläche</div>
            <div className="mt-1 text-xl font-black">
              {result.calculatedArea} m²
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-xs text-slate-300">Richtpreis netto</div>
            <div className="mt-1 text-xl font-black">
              {result.low.toLocaleString("de-DE")}–
              {result.high.toLocaleString("de-DE")} €
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-400 p-4 text-slate-950">
            <div className="text-xs font-bold uppercase tracking-wide">
              Ergebnis
            </div>
            <div className="mt-1 text-lg font-black">
              Angebot + Antwort vorbereitet
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-300">
            Risikoanalyse
          </div>
          <ul className="space-y-2 text-sm leading-6 text-slate-100">
            {result.risks.map((risk) => (
              <li key={risk}>• {risk}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-300">
            Rückfragen an den Kunden
          </div>
          <ul className="space-y-2 text-sm leading-6 text-slate-100">
            {result.questions.map((question) => (
              <li key={question}>• {question}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-300">
            Kundenantwort
          </div>
          <pre className="whitespace-pre-wrap text-sm leading-6 text-slate-100">
            {result.customerReply}
          </pre>
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

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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