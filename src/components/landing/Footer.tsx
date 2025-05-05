// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-background border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-default-color">
          © {new Date().getFullYear()} <strong>Layaran</strong>. All rights reserved.
        </div>
      </footer>
    )
  }
  