import Image from "next/image";

export default async function Home() {
  const data = await fetch('http://localhost:8000/')
  const posts: Array<{
    id: number;
    policy_number: string;
    policy_holder_name: string;
    status: string;
  }> = await data.json()

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Insurance Policies</h1>
      <main className="w-full flex flex-col items-center">
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Policy Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Holder Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-b">View</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={post.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100 transition"}>
                  <td className="px-6 py-4 whitespace-nowrap border-b text-sm text-gray-900">{post.policy_number}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b text-sm text-gray-900">{post.policy_holder_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b text-sm">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${post.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{post.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b text-center">
                    <a href={`${post.id}`} className="inline-block p-2 rounded hover:bg-gray-200 transition">
                      <Image
                        className="dark:invert"
                        src="/file.svg"
                        alt="View Policy"
                        width={20}
                        height={20}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
