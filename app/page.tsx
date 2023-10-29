import Link from "next/link"

export default function Main() {
  return (
    <main className="flex items-center px-10">
      <div>
        <h1 className="text-9xl">WELCOME</h1>

        <div className="flex justify-end">
          <Link href="/movies">
            <span className="btn btn-lg rounded-full btn-info">movies</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
