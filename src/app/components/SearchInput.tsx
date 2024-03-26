"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams)
    const term = e.target.value;
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }


  return (
    <div className="grid grid-cols-1">
      <input
        onChange={handleSearch}
        className="p-2 mb-10 border border-slate-300"
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
        placeholder="Search Car"
      />
    </div>
  )
} 