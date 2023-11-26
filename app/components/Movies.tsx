import { useContext } from "react"
import { MovieContext } from "./MainContainer"
import Image from "next/image"
import Genres from "./Genres"
import { motion, AnimatePresence } from "framer-motion"

export default function MoviesContainer() {
  const genres = Genres()
  const { filteredMovies } = useContext(MovieContext)

  return (
    <AnimatePresence>
      <div className="h-fit flex-1 grid grid-cols-4 gap-4">
        {filteredMovies &&
          filteredMovies.map((movie: any) => (
            <motion.div
              key={movie.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-600 rounded-md p-2 flex flex-col relative"
            >
              <div className="absolute top-0 right-0 p-1 z-10 text-xs  rounded-md bg-zinc-600">
                <div className="px-1 py-[2px] rounded-md bg-primary">
                  {movie.id}
                </div>
              </div>
              <div className="group overflow-hidden ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="broken"
                  width={200}
                  height={300}
                  priority
                  className="w-full rounded-md group-hover:scale-110 transition-transform ease-in-out"
                />
              </div>
              <p className="">{movie.title}</p>
              <div className="flex-1 items-end flex flex-wrap gap-1">
                {movie.genre_ids.map((genre_id: any) => (
                  <p
                    key={genre_id}
                    className="px-2 py-1 rounded-xl text-xs bg-zinc-900"
                  >
                    {genres.map((g) => g.id === genre_id && g.name)}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
      </div>
    </AnimatePresence>
  )
}
