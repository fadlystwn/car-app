'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <h2 className="text-red-500 text-lg">Something went wrong!</h2>
      <button className="border bg-red-600 text-white p-3 w-80" onClick={() => reset()}>Try again</button>
    </div>
  )
}