function Footer() {
  return (
    <footer className="w-full bg-brand-800 text-brand-300 text center py-4 px-6 border-t border-black/10 dark:border-white/10">
      <div className="flex flex-col sm:flex-row gap-4 text-neutral-500 dark:text-white/60 items-center mx-auto py-6 px-6 justify-between text-sm">
        <span className="font-bold tracking-tight text-white">
          Movie<span className="text-brand-500">Find</span>
        </span>
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>
        <p>&copy; 2026 MovieFind</p>
      </div>
    </footer>
  );
}

export default Footer;
