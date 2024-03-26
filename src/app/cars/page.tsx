
import { lazy, Suspense } from "react";
import { fetchData } from "@/utils/fetchApi";

import SearchInput from "@/app/components/SearchInput";
const CarList = lazy(() => import("@/app/components/CarList"))

export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {

  const query = searchParams?.query || '';

  const res = await fetchData(`${process.env.NEXT_PUBLIC_API}/cars?${query}`)
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Car List</h1>
      <SearchInput />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <Suspense fallback="loading..">
          {
            res && res.map((item: any) => {
              return (
                <CarList key={item.car_id} data={item} />
              )
            })
          }
        </Suspense>
      </div>
    </main >
  )
}