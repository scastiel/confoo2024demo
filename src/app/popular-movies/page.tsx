'use client'
import type { Movie } from '@/lib/tmdb'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function PopularMoviesPage() {
  const [movies, setMovies] = useState<Movie[] | null>(null)

  useEffect(() => {
    fetch('/api/popular-movies')
      .then((res) => res.json())
      .then((movies) => setMovies(movies))
  }, [])

  return (
    <>
      <h1>Popular Movies</h1>
      {movies === null && <p>Loading…</p>}
      {movies !== null && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
