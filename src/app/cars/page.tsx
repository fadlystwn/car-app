import CarList from "@/app/components/CarList";
import { fetchData } from "@/utils/fetchApi";

export default async function CarPage() {

  const res = await fetchData(`${process.env.NEXT_PUBLIC_API}/cars`)
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Car List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {
          res.map((item: any) => {
            return (
              <CarList key={item.car_id} data={item} />
            )
          })
        }
      </div>
    </main>
  )
}