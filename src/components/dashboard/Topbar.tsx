// src/components/dashboard/Topbar.tsx
export default function Topbar() {
    return (
      <header className="h-16 bg-white border-b flex items-center justify-between px-6 ml-64 fixed w-[calc(100%-16rem)] top-0 z-30">
        <h1 className="text-lg font-medium text-gray-700">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">admin@layaran.app</span>
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    )
  }
  