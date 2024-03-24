import { fetchData } from "@/utils/fetchApi";
import Image from "next/image";
export default async function CarDetail({ params }: { params: { id: string } }) {
  const data = await fetchData(`${process.env.NEXT_PUBLIC_API}/cars/car${params.id}`)
  return (
    <main className="container mx-auto py-8 px-4" >
      <h1 className="text-5xl font-bold mb-10">{data[0]?.model}</h1>
      <Image className="rounded-t-md" src="https://placehold.co/600x400/png" width="600" height="400" alt={data[0].car_id} />
    </main>
  );
}
