export default function DashboardPage() {
  return (
    <div className="section-container space-y-4">
      <h1 className="text-3xl font-bold text-brand.blue">Admin Dashboard</h1>
      <ul className="grid gap-3 md:grid-cols-3">
        <li className="rounded-xl border p-4">Package Management</li>
        <li className="rounded-xl border p-4">Blog Management</li>
        <li className="rounded-xl border p-4">Visa & Inquiry Management</li>
      </ul>
    </div>
  );
}
