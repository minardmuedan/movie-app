import MovieFetch from "@/lib/MovieFetch"
import { Movies } from "@/models/MovieSchema"
import Navbar from "./components/Navbar"
import Link from "next/link"

export default async function Movies() {
  const page = 499
  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}`
  const movies: Movies | undefined = await MovieFetch(url)

  if (!movies) return <p>none</p>
  return (
    <main className="flex p-2 gap-2">
      <Navbar />
      <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 border overflow-y-auto">
        {movies.results.map((movie) => (
          <Link href={`/movies/${movie.id}`}>
            <div className="h-56 flex items-center justify-center border">
              <p key={movie.id}>{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
