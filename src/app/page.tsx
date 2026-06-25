import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-accent-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-light blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-warm blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            Public Mission &middot; Research &middot; Sustainability
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Turning wasted energy into knowledge for a sustainable future
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Energiemind is an open research and education initiative focused on energy waste
            reduction, mining heat reuse, and public sustainability documentation. We share
            findings freely — no sales, no presale, no commercial agenda.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center rounded-lg bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Our Mission
            </a>
            <a
              href="#public-resources"
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section
        id="mission"
        title="Mission"
        subtitle="We exist to advance public understanding of energy systems and accelerate the transition to a waste-free, sustainable energy economy."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Energiemind was founded on a simple conviction: the energy we waste today is
              knowledge we fail to share tomorrow. Across industrial processes, data centers,
              and cryptocurrency mining operations, enormous quantities of thermal energy are
              released into the atmosphere — energy that could heat homes, greenhouses, and
              community facilities.
            </p>
            <p>
              Our mission is to document, research, and educate. We publish open findings,
              collaborate with academic institutions, and provide free resources to policymakers,
              engineers, and citizens who want to understand how energy systems can work better
              for people and the planet.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="font-serif text-xl font-semibold text-accent-dark">Core Principles</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Open science — all research published for public access",
                "Evidence-based — data and methodology fully documented",
                "Community-first — solutions designed for local benefit",
                "Non-commercial — no products, presales, or sales channels",
              ].map((principle) => (
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

      {/* Research */}
      <Section
        id="research"
        title="Research"
        subtitle="Peer-oriented studies on energy efficiency, thermal recovery systems, and the environmental impact of industrial energy use."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={<IconResearch />}
            tag="Active"
            title="Thermal Recovery Feasibility Studies"
            description="Quantitative analysis of heat capture potential across mining, manufacturing, and computing infrastructure. Includes cost-benefit models and regional case studies."
          />
          <Card
            icon={<IconResearch />}
            tag="Active"
            title="Energy Waste Mapping"
            description="Geospatial research identifying industrial heat waste hotspots and matching them with nearby thermal demand — district heating, agriculture, and aquaculture."
          />
          <Card
            icon={<IconResearch />}
            tag="Published"
            title="Lifecycle Carbon Analysis"
            description="Full lifecycle assessments comparing conventional heating with recovered industrial heat, including embodied carbon and grid displacement factors."
          />
          <Card
            icon={<IconResearch />}
            tag="Active"
            title="Policy Framework Review"
            description="Comparative analysis of national and regional policies that enable or hinder industrial heat recovery, with recommendations for public administrators."
          />
          <Card
            icon={<IconResearch />}
            tag="Planning"
            title="Community Integration Models"
            description="Socioeconomic research on how recovered heat projects can be structured to benefit local communities equitably and transparently."
          />
          <Card
            icon={<IconResearch />}
            tag="Published"
            title="Open Data Standards"
            description="Development of standardized data formats for reporting energy waste and heat recovery metrics, enabling cross-study comparison and replication."
          />
        </div>
        <p className="mt-8 text-sm text-muted">
          All published research is available under open licenses in the{" "}
          <a href="#public-resources" className="font-medium text-accent hover:underline">
            Public Resources
          </a>{" "}
          section. We welcome academic collaboration and independent replication.
        </p>
      </Section>

      {/* Mining Heat Reuse */}
      <Section
        id="mining-heat-reuse"
        title="Mining Heat Reuse"
        subtitle="Cryptocurrency and data-center mining operations generate substantial waste heat. We research how this thermal output can be redirected to productive use."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Proof-of-work and high-performance computing facilities produce heat as a
              byproduct of continuous computation. Rather than venting this energy into the
              atmosphere, mining heat reuse captures it for district heating networks,
              greenhouse agriculture, water heating, and industrial processes.
            </p>
            <p>
              Energiemind documents real-world implementations, measures efficiency gains, and
              publishes technical guides for operators and municipalities considering heat
              recovery partnerships. Our work emphasizes transparency about energy sources,
              grid impact, and community benefit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "60–90%", label: "Heat recovery potential in optimized systems" },
              { value: "24/7", label: "Continuous thermal output from mining operations" },
              { value: "3×", label: "Typical efficiency gain vs. vented heat" },
              { value: "Open", label: "All case study data publicly documented" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-section-alt p-5 text-center">
                <p className="font-serif text-2xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            icon={<IconHeat />}
            title="Technical Architecture"
            description="Heat exchanger design, fluid loop configurations, and integration patterns for connecting mining facilities to existing heating infrastructure."
          />
          <Card
            icon={<IconHeat />}
            title="Case Study Library"
            description="Documented deployments in Nordic countries, Central Europe, and North America — including performance data, challenges, and lessons learned."
          />
          <Card
            icon={<IconHeat />}
            title="Environmental Assessment"
            description="Honest evaluation of net environmental impact, including energy source analysis, grid dependency, and carbon accounting methodology."
          />
        </div>
      </Section>

      {/* Energy Waste Reduction */}
      <Section
        id="energy-waste-reduction"
        title="Energy Waste Reduction"
        subtitle="Systematic approaches to identifying, measuring, and eliminating energy waste across industrial and municipal systems."
        alt
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            icon={<IconEnergy />}
            title="Waste Auditing Methodology"
            description="A standardized framework for conducting energy waste audits in industrial facilities. Covers thermal losses, electrical inefficiencies, and operational waste patterns."
          />
          <Card
            icon={<IconEnergy />}
            title="Smart Monitoring Systems"
            description="Research into low-cost sensor networks and data analytics for real-time energy waste detection, enabling proactive intervention before losses compound."
          />
          <Card
            icon={<IconEnergy />}
            title="Behavioral & Operational Factors"
            description="Studies on how operational practices, maintenance schedules, and organizational culture affect energy waste — with actionable recommendations."
          />
          <Card
            icon={<IconEnergy />}
            title="Retrofit Prioritization"
            description="Decision frameworks for ranking energy efficiency improvements by impact, cost, and implementation complexity — designed for public-sector budget constraints."
          />
        </div>

        <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-8">
          <h3 className="font-serif text-xl font-semibold text-accent-dark">
            The Waste Hierarchy
          </h3>
          <p className="mt-2 text-sm text-muted">
            Our research follows a clear priority order for addressing energy waste:
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Eliminate", desc: "Remove unnecessary energy consumption entirely" },
              { step: "2", title: "Reduce", desc: "Minimize energy input for required outputs" },
              { step: "3", title: "Recover", desc: "Capture and reuse waste heat and byproducts" },
              { step: "4", title: "Offset", desc: "Replace remaining demand with clean sources" },
            ].map((item) => (
              <li key={item.step} className="rounded-lg bg-surface p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Step {item.step}
                </span>
                <p className="mt-1 font-serif font-semibold text-accent-dark">{item.title}</p>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Sustainability Reports */}
      <Section
        id="sustainability-reports"
        title="Sustainability Reports"
        subtitle="Transparent, periodic reporting on our environmental footprint, research progress, and community impact."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              year: "2025",
              title: "Annual Sustainability Report",
              status: "In Progress",
              summary: "Comprehensive review of research output, energy metrics from field studies, and environmental impact assessments across all active projects.",
            },
            {
              year: "2024",
              title: "Annual Sustainability Report",
              status: "Published",
              summary: "First annual report covering mission launch, initial research publications, partnership development, and baseline environmental measurements.",
            },
            {
              year: "2025",
              title: "Mining Heat Reuse Impact Assessment",
              status: "In Progress",
              summary: "Focused report on thermal recovery case studies, including measured heat delivery volumes, carbon displacement, and community benefit metrics.",
            },
            {
              year: "2024",
              title: "Energy Waste Baseline Study",
              status: "Published",
              summary: "Foundational study establishing methodology and initial data for industrial energy waste quantification in target regions.",
            },
          ].map((report) => (
            <article
              key={`${report.year}-${report.title}`}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-section-alt px-3 py-0.5 text-xs font-medium text-muted">
                  {report.year}
                </span>
                <span
                  className={`text-xs font-medium ${
                    report.status === "Published" ? "text-accent" : "text-warm"
                  }`}
                >
                  {report.status}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-accent-dark">
                {report.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {report.summary}
              </p>
              <p className="mt-4 text-xs text-muted">
                {report.status === "Published"
                  ? "Available in Public Resources"
                  : "Will be published upon completion"}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section
        id="education"
        title="Education"
        subtitle="Free learning materials for students, professionals, and communities seeking to understand energy systems and sustainability."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={<IconEducation />}
            tag="Course"
            title="Introduction to Energy Systems"
            description="Foundational course covering how energy flows through industrial, residential, and municipal systems — with emphasis on waste identification."
          />
          <Card
            icon={<IconEducation />}
            tag="Workshop"
            title="Heat Recovery for Practitioners"
            description="Hands-on workshop materials for engineers and facility managers on designing and implementing thermal recovery systems."
          />
          <Card
            icon={<IconEducation />}
            tag="Guide"
            title="Sustainability Literacy"
            description="Accessible guides explaining carbon accounting, lifecycle analysis, and sustainability reporting for non-technical audiences."
          />
          <Card
            icon={<IconEducation />}
            tag="Webinar"
            title="Mining & Energy Policy"
            description="Recorded discussions on the intersection of cryptocurrency mining, energy policy, and community heat recovery programs."
          />
          <Card
            icon={<IconEducation />}
            tag="Curriculum"
            title="School Program Materials"
            description="Age-appropriate lesson plans and activities for K-12 educators teaching energy conservation and environmental stewardship."
          />
          <Card
            icon={<IconEducation />}
            tag="Toolkit"
            title="Community Organizer Toolkit"
            description="Resources for local groups advocating for energy waste reduction and heat recovery projects in their municipalities."
          />
        </div>
      </Section>

      {/* Public Resources */}
      <Section
        id="public-resources"
        title="Public Resources"
        subtitle="Open-access documents, datasets, and tools — freely available for download, citation, and reuse."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={<IconResource />}
            tag="Dataset"
            title="Industrial Heat Waste Atlas"
            description="Geospatial dataset mapping estimated thermal waste from industrial facilities across participating regions. Updated quarterly."
          />
          <Card
            icon={<IconResource />}
            tag="Document"
            title="Research Paper Archive"
            description="Complete archive of published papers, preprints, and technical notes. All materials licensed for academic and public use."
          />
          <Card
            icon={<IconResource />}
            tag="Tool"
            title="Heat Recovery Calculator"
            description="Open-source spreadsheet and web tool for estimating heat recovery potential based on facility type, size, and local demand."
          />
          <Card
            icon={<IconResource />}
            tag="Document"
            title="Policy Brief Collection"
            description="Concise policy briefs designed for legislators and public administrators, summarizing research findings into actionable recommendations."
          />
          <Card
            icon={<IconResource />}
            tag="Dataset"
            title="Energy Waste Metrics Standard"
            description="Machine-readable schema and reference data for standardized energy waste reporting, enabling cross-study analysis."
          />
          <Card
            icon={<IconResource />}
            tag="Document"
            title="Glossary & Reference"
            description="Comprehensive glossary of energy systems terminology, units, and conversion factors used across our research and education materials."
          />
        </div>

        <div className="mt-10 rounded-xl border border-border bg-section-alt p-8 text-center">
          <p className="font-serif text-lg font-semibold text-accent-dark">
            All resources are free. No accounts, no paywalls, no purchases.
          </p>
          <p className="mt-2 text-sm text-muted">
            We believe sustainability knowledge should be a public good. Resources will be
            made available for download as they are finalized.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Reach out for research collaboration, education partnerships, media inquiries, or general questions about our mission."
        alt
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                General Inquiries
              </h3>
              <a
                href="mailto:hello@energiemind.org"
                className="mt-2 block font-serif text-xl text-accent hover:underline"
              >
                hello@energiemind.org
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Research Collaboration
              </h3>
              <a
                href="mailto:research@energiemind.org"
                className="mt-2 block font-serif text-xl text-accent hover:underline"
              >
                research@energiemind.org
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Education & Outreach
              </h3>
              <a
                href="mailto:education@energiemind.org"
                className="mt-2 block font-serif text-xl text-accent hover:underline"
              >
                education@energiemind.org
              </a>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              We are a research and education initiative — not a commercial entity. We do not
              sell products, accept presale orders, or operate a shop. For media inquiries,
              please include your publication and deadline in your message.
            </p>
          </div>

          <form className="rounded-xl border border-border bg-surface p-8" action="#" method="post">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent-dark">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-accent-dark">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                >
                  <option>General inquiry</option>
                  <option>Research collaboration</option>
                  <option>Education partnership</option>
                  <option>Media inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
