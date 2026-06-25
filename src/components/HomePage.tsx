import { Section, getTagLabel } from "@/components/Section";
import { Card } from "@/components/Card";
import type { Dictionary } from "@/i18n/types";

function IconResearch() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconHeat() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  );
}

function IconEnergy() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconEducation() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

function IconResource() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

interface HomePageProps {
  dict: Dictionary;
}

export function HomePage({ dict }: HomePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-accent-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-light blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-warm blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            {dict.hero.badge}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {dict.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center rounded-lg bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              {dict.hero.ctaMission}
            </a>
            <a
              href="#public-resources"
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {dict.hero.ctaResources}
            </a>
          </div>
        </div>
      </section>

      <Section id="mission" title={dict.mission.title} subtitle={dict.mission.subtitle}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{dict.mission.p1}</p>
            <p>{dict.mission.p2}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="font-serif text-xl font-semibold text-accent-dark">
              {dict.mission.principlesTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {dict.mission.principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="research" title={dict.research.title} subtitle={dict.research.subtitle} alt>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.research.cards.map((card) => (
            <Card
              key={card.title}
              icon={<IconResearch />}
              tag={getTagLabel(dict, card.tag)}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          {dict.research.footnote}{" "}
          <a href="#public-resources" className="font-medium text-accent hover:underline">
            {dict.research.footnoteLink}
          </a>{" "}
          {dict.research.footnoteEnd}
        </p>
      </Section>

      <Section id="mining-heat-reuse" title={dict.miningHeatReuse.title} subtitle={dict.miningHeatReuse.subtitle}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{dict.miningHeatReuse.p1}</p>
            <p>{dict.miningHeatReuse.p2}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.miningHeatReuse.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-section-alt p-5 text-center">
                <p className="font-serif text-2xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.miningHeatReuse.cards.map((card) => (
            <Card key={card.title} icon={<IconHeat />} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <Section id="energy-waste-reduction" title={dict.energyWasteReduction.title} subtitle={dict.energyWasteReduction.subtitle} alt>
        <div className="grid gap-6 lg:grid-cols-2">
          {dict.energyWasteReduction.cards.map((card) => (
            <Card key={card.title} icon={<IconEnergy />} title={card.title} description={card.description} />
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-8">
          <h3 className="font-serif text-xl font-semibold text-accent-dark">
            {dict.energyWasteReduction.hierarchyTitle}
          </h3>
          <p className="mt-2 text-sm text-muted">{dict.energyWasteReduction.hierarchySubtitle}</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.energyWasteReduction.hierarchySteps.map((item) => (
              <li key={item.step} className="rounded-lg bg-surface p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {dict.energyWasteReduction.stepLabel} {item.step}
                </span>
                <p className="mt-1 font-serif font-semibold text-accent-dark">{item.title}</p>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="sustainability-reports" title={dict.sustainabilityReports.title} subtitle={dict.sustainabilityReports.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {dict.sustainabilityReports.reports.map((report) => (
            <article key={`${report.year}-${report.title}`} className="flex flex-col rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-section-alt px-3 py-0.5 text-xs font-medium text-muted">
                  {report.year}
                </span>
                <span className={`text-xs font-medium ${report.status === "Published" ? "text-accent" : "text-warm"}`}>
                  {report.status === "Published"
                    ? dict.sustainabilityReports.statusPublished
                    : dict.sustainabilityReports.statusInProgress}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-accent-dark">{report.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{report.summary}</p>
              <p className="mt-4 text-xs text-muted">
                {report.status === "Published"
                  ? dict.sustainabilityReports.availableInResources
                  : dict.sustainabilityReports.willBePublished}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title={dict.education.title} subtitle={dict.education.subtitle} alt>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.education.cards.map((card) => (
            <Card
              key={card.title}
              icon={<IconEducation />}
              tag={getTagLabel(dict, card.tag)}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      <Section id="public-resources" title={dict.publicResources.title} subtitle={dict.publicResources.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {dict.publicResources.cards.map((card) => (
            <Card
              key={card.title}
              icon={<IconResource />}
              tag={getTagLabel(dict, card.tag)}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-border bg-section-alt p-8 text-center">
          <p className="font-serif text-lg font-semibold text-accent-dark">{dict.publicResources.freeTitle}</p>
          <p className="mt-2 text-sm text-muted">{dict.publicResources.freeDescription}</p>
        </div>
      </Section>

      <section id="faq" className="scroll-mt-20 bg-section-alt py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-accent-dark md:text-4xl">
            {dict.faqSection.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dict.faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-serif text-lg font-semibold text-accent-dark">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section id="contact" title={dict.contact.title} subtitle={dict.contact.subtitle} alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {dict.contact.generalInquiries}
              </h3>
              <a href="mailto:hello@energiemind.org" className="mt-2 block font-serif text-xl text-accent hover:underline">
                hello@energiemind.org
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {dict.contact.researchCollaboration}
              </h3>
              <a href="mailto:research@energiemind.org" className="mt-2 block font-serif text-xl text-accent hover:underline">
                research@energiemind.org
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {dict.contact.educationOutreach}
              </h3>
              <a href="mailto:education@energiemind.org" className="mt-2 block font-serif text-xl text-accent hover:underline">
                education@energiemind.org
              </a>
            </div>
            <p className="text-sm text-muted leading-relaxed">{dict.contact.disclaimer}</p>
          </div>

          <form className="rounded-xl border border-border bg-surface p-8" action="#" method="post">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent-dark">
                  {dict.contact.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder={dict.contact.formNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent-dark">
                  {dict.contact.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder={dict.contact.formEmailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-accent-dark">
                  {dict.contact.formSubject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                >
                  {dict.contact.subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent-dark">
                  {dict.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder={dict.contact.formMessagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {dict.contact.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
