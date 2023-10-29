import { Movies, MoviesSchema } from "@/models/MovieSchema"

export default async function MovieFetch(url: string) {
  const response = await fetch(url + "&api_key=" + process.env.TMDB_API_KEY)
  const moviesResults: Movies = await response.json()

  if (!moviesResults.results) return undefined
  return moviesResults
}

export function getImage(src: string) {
  return "https://image.tmdb.org/t/p/original" + src
}
