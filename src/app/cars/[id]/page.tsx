
type Params = {
  id: string
}
export default async function CarDetails({ params }: { params: Params }) {
  console.log(params)
  return (
    <main className="container mx-auto py-8 px-4" >
      <h1 className="text-3xl font-bold">{params.id}</h1>
    </main>
  );
}
