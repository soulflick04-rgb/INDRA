"use client";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-brand-white/10 bg-brand-black text-brand-muted mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-heading font-bold text-xl tracking-wider text-brand-white">
            MUSEUM <span className="text-brand-cyan">2050</span>
          </span>
          <p className="text-sm max-w-xs">
            Fictional Interactive Experience designed as a creative frontend project.
          </p>
        </div>
        
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#exhibitions" className="hover:text-brand-cyan transition-colors">Exhibitions</a>
          <a href="#timeline" className="hover:text-brand-cyan transition-colors">Timeline</a>
          <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
          <button 
            onClick={() => {
              const el = document.querySelector('button[title="Toggle Reduced Motion"]');
              if (el) (el as HTMLButtonElement).click();
            }} 
            className="text-left hover:text-brand-cyan transition-colors"
          >
            Accessibility
          </button>
          <a href="#about" className="hover:text-brand-cyan transition-colors">Credits</a>
        </nav>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-white/5 text-xs text-brand-muted/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="max-w-2xl">
          Disclaimer: All technologies, statistics, companies, and projections presented in this experience are fictional concepts created for educational and creative purposes.
        </p>
        <div className="w-8 h-8 rounded-full border border-brand-cyan/30 flex items-center justify-center">
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
