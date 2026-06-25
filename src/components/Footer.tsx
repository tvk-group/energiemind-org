export function Footer() {
  return (
    <footer className="border-t border-border bg-accent-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light text-sm font-bold">
                EM
              </span>
              <span className="font-serif text-xl font-semibold">Energiemind</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A public mission initiative dedicated to sustainability research, energy waste
              reduction, and open education for communities worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#mining-heat-reuse" className="hover:text-white transition-colors">Mining Heat Reuse</a></li>
              <li><a href="#energy-waste-reduction" className="hover:text-white transition-colors">Energy Waste Reduction</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#sustainability-reports" className="hover:text-white transition-colors">Sustainability Reports</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#public-resources" className="hover:text-white transition-colors">Public Resources</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Energiemind. All rights reserved.</p>
          <p>Public mission &middot; Research &middot; Education &middot; No commercial sales</p>
        </div>
      </div>
    </footer>
  );
}
