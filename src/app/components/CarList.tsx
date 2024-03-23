import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CarList({ data }: { data: any }) {
  return (
    <Link href={`/cars/${data.car_id}`}>
      <div className="bg-white rounded-lg shadow">
        <Image className="rounded-t-md" src="https://placehold.co/600x400/png" width="600" height="400" alt={data.car_id} />
        <div className='p-3'>
          <h2 className="text-slate-800 text-2xl font-semibold mt-2">{data?.model}</h2>
          <p className="text-slate-500 text-sm mb-2">type: <span className="font-light">{data?.type}</span></p>
          <p className="text-slate-500 text-xs">{data?.wheels}</p>
          <p className='text-slate-600 mt-3 text-sm font-bold'>
            Parts
          </p>
          <ul className="flex flex-wrap">
            {
              data.parts.map((part: string) => {
                return (
                  <li className="border rounded-lg bg-slate-100 text-xs mr-1 my-1 py-1 px-2">{part}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Link >
  )
}
