export default function DashboardPage() {
  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p>Your dashboard content goes here.</p>
        </div>
      </div>
    </div>
  );
}
