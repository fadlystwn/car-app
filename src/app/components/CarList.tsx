import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CarList({ data }: { data: any }) {
  return (
    <Link href={`/cars/${data.car_id}`}>
      <div className="bg-white rounded-lg shadow p-4">
        <Image src="https://placehold.co/600x400/png" width="600" height="400" alt={data.car_id} />
        <h2 className="text-lg font-semibold mb-2">{data?.model}</h2>
        <p className="text-slate-500 font-bold text-sm">{data?.type}</p>
        <p className="text-slate-500 text-xs">{data?.wheels}</p>
      </div>
    </Link>
  )
}
