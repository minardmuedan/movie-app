import { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MainContainer"
import Genres from "./Genres"

export default function Navbar() {
  const genres = Genres()
  const [activeGenres, setActiveGenres] = useState<number[]>([])
  const { moviess, setFilteredMovies } = useContext(MovieContext)

  const handleClick = (genre_id: number) => {
    if (activeGenres.includes(genre_id))
      setActiveGenres(
        activeGenres.filter((activeGenre: any) => activeGenre != genre_id)
      )
    else setActiveGenres([...activeGenres, genre_id])
  }

  useEffect(() => {
    const filteredMovies = moviess.filter((movie: any) =>
      activeGenres.some((activeGenre: any) =>
        movie.genre_ids.includes(activeGenre)
      )
    )

    if (activeGenres[0]) setFilteredMovies(filteredMovies)
    else setFilteredMovies(moviess)
  }, [activeGenres])

  return (
    <nav className="w-fit h-fit bg-zinc-600 rounded-md py-3 px-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => handleClick(genre.id)}
          className={`block py-1 px-3 w-fit rounded-lg mb-1 text-sm ${
            activeGenres && activeGenres.includes(genre.id) && "bg-primary"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </nav>
  )
}
