type Props = {
  params: {
    movie_id: string
  }
}

export default function MovieDetails({ params }: Props) {
  const movieId = params.movie_id
  return <div>{movieId}</div>
}
