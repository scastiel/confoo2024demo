import { fetchMovies } from '@/lib/tmdb'
import Link from 'next/link'
import { Suspense } from 'react'

export default function PopularMoviesPage() {
  return (
    <>
      <h1>Popular Movies</h1>
      <Suspense fallback={<p>Loading…</p>}>
        <PopularMovies />
      </Suspense>
    </>
  )
}

async function PopularMovies() {
  const movies = await fetchMovies()

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}
