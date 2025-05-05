export default function Header() {
    return (
      <header className="bg-white shadow fixed w-full z-50 top-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-accent">
            Layaran
          </a>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-accent text-sm">About</a>
            <a href="#features" className="hover:text-accent text-sm">Features</a>
            <a href="#pricing" className="hover:text-accent text-sm">Pricing</a>
            <a href="#faq" className="hover:text-accent text-sm">FAQ</a>
          </nav>
          <a href="/dashboard" className="bg-accent text-white px-4 py-2 rounded text-sm">
            Member Area
          </a>
        </div>
      </header>
    )
  }
  