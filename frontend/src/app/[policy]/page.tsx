export default async function Page({
  params,
}: {
  params: Promise<{ policy: string }>
}) {
  const { policy } = await params
  const data = await fetch('http://localhost:8000/policies/'+policy)
  const posts = await data.json()
  return (
    <div className="font-sans min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Insurance Policy Detail</h1>
      <main className="w-full flex flex-col items-center">
        <div className="w-full max-w-2xl overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Field</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">ID</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.id}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">Policy Number</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.policy_number}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">Holder Name</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.policy_holder_name}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">Coverage Amount</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.coverage_amount}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">Start Date</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.start_date}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">End Date</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.end_date}</td></tr>
              <tr><td className="px-6 py-4 border-b text-sm text-gray-900">Status</td><td className="px-6 py-4 border-b text-sm text-gray-900">{posts.status}</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
