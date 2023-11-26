"use client"

import { Movies } from "@/models/MovieSchema"
import Navbar from "./Navbar"
import { createContext, useEffect, useState } from "react"
import MoviesContainer from "./Movies"
import { AnimatePresence } from "framer-motion"

export const MovieContext = createContext<any>({})

type Props = {
  movies: Movies
}

export default function MainContainer({ movies }: Props) {
  const moviess = movies.results
  const [filteredMovies, setFilteredMovies]: any = useState()
  useEffect(() => {
    setFilteredMovies(moviess)
  }, [])
  const value = { moviess, filteredMovies, setFilteredMovies }
  return (
    <div className="h-fit flex gap-5 text-white">
      <MovieContext.Provider value={value}>
        <Navbar />
        <AnimatePresence>
          <MoviesContainer />
        </AnimatePresence>
      </MovieContext.Provider>
    </div>
  )
}
