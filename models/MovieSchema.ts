import { z } from "zod"

// const Movies = z.object({
//   results: z.object({
//     backdrop_path: z.string(),
//     genre_ids: z.array(z.number()),

//     id: z.number(),
//     original_title: z.string(),
//     overview: z.string(),
//     poster_path: z.string(),
//     release_date: z.string(),
//     title: z.string(),
//     vote_average: z.number(),
//   }),
// })

const MovieDetailsSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  tagline: z.string().optional(),
  overview: z.string().optional(),
  runtime: z.number().optional(),
  release_date: z.string().optional(),
  vote_average: z.number().optional(),
  homepage: z.string().optional(),

  poster_path: z.string(),
  blurDataUrl: z.string().optional(),
  backdrop_path: z.string().optional(),
  budget: z.number().optional(),
  genre_ids: z.array(z.number()),

  production_companies: z
    .array(
      z
        .object({
          logo_path: z.string(),
          name: z.string(),
        })
        .optional()
    )
    .optional(),
})

export const MoviesSchema = z.object({
  results: z.array(MovieDetailsSchema),
})

export type Movie = z.infer<typeof MovieDetailsSchema>
export type Movies = z.infer<typeof MoviesSchema>
