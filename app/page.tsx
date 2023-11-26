import MovieFetch from "@/lib/MovieFetch"
import { Movies } from "@/models/MovieSchema"
import MainContainer from "./components/MainContainer"

export default async function Main() {
  const movies: Movies = await MovieFetch(
    "https://api.themoviedb.org/3/discover/movie?"
  )

  return (
    <main className="bg-zinc-800 py-5 px-10 h-screen overflow-y-auto">
      <MainContainer movies={movies} />
    </main>
  )
}
