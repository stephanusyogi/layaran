// src/app/dashboard/layout.tsx
// import '@/styles/dashboard.css'
import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Layaran Admin',
  description: 'Admin panel to manage events, messages, and user settings.',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter text-gray-800 bg-gray-100">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Topbar />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
