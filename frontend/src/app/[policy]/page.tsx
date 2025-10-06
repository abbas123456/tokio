function generateStaticParams() {}
 
export default async function Page({
  params,
}: {
  params: Promise<{ policy: string }>
}) {
  const { policy } = await params
  const data = await fetch('https://api.vercel.app/blog/'+policy)
  const posts = await data.json()
  return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Insurance policy detail</h1>
     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-4xl font-bold">{posts.title}</h1>
    </main>
    </div>
    )
}
